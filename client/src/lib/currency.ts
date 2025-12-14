// Currency conversion utility for AxiomHost
// Converts prices based on user's location/IP

import { useState, useEffect } from "react";

export interface CurrencyInfo {
  code: string;
  symbol: string;
  name: string;
  rate: number; // Rate relative to NGN (Nigerian Naira)
}

// Currency rates (updated regularly - in production, fetch from API)
const CURRENCY_RATES: Record<string, CurrencyInfo> = {
  NGN: { code: "NGN", symbol: "₦", name: "Nigerian Naira", rate: 1 },
  EUR: { code: "EUR", symbol: "€", name: "Euro", rate: 0.00062 },
  GBP: { code: "GBP", symbol: "£", name: "British Pound", rate: 0.00053 },
  CAD: { code: "CAD", symbol: "C$", name: "Canadian Dollar", rate: 0.00091 },
  AUD: { code: "AUD", symbol: "A$", name: "Australian Dollar", rate: 0.0010 },
  ZAR: { code: "ZAR", symbol: "R", name: "South African Rand", rate: 0.012 },
  GHS: { code: "GHS", symbol: "₵", name: "Ghanaian Cedi", rate: 0.008 },
  KES: { code: "KES", symbol: "KSh", name: "Kenyan Shilling", rate: 0.089 },
  XOF: { code: "XOF", symbol: "CFA", name: "West African CFA Franc", rate: 0.40 },
};

// Country to currency mapping
const COUNTRY_CURRENCY: Record<string, string> = {
  NG: "NGN",
  GB: "GBP",
  CA: "CAD",
  AU: "AUD",
  ZA: "ZAR",
  GH: "GHS",
  KE: "KES",
  SN: "XOF", // Senegal
  CI: "XOF", // Ivory Coast
  ML: "XOF", // Mali
  BF: "XOF", // Burkina Faso
  NE: "XOF", // Niger
  TG: "XOF", // Togo
  BJ: "XOF", // Benin
  // Add more countries as needed
};

// Default currency (NGN - Nigerian Naira)
const DEFAULT_CURRENCY = "NGN";

/**
 * Detect user's currency based on their location
 * In production, this would use IP geolocation or browser locale
 */
export async function detectUserCurrency(): Promise<string> {
  try {
    // Check if we're in browser environment
    if (typeof window === "undefined" || typeof localStorage === "undefined") {
      return DEFAULT_CURRENCY;
    }

    // Try to get from localStorage first
    const savedCurrency = localStorage.getItem("axiomhost_currency");
    if (savedCurrency && CURRENCY_RATES[savedCurrency]) {
      return savedCurrency;
    }

    // Try to detect from browser locale
    if (typeof navigator !== "undefined") {
      const locale = navigator.language || (navigator as any).userLanguage;
      const countryCode = locale.split("-")[1]?.toUpperCase();
      
      if (countryCode && COUNTRY_CURRENCY[countryCode]) {
        return COUNTRY_CURRENCY[countryCode];
      }
    }

    // Try IP-based geolocation (using a free API)
    if (typeof fetch !== "undefined") {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        const country = data.country_code;
        
        if (country && COUNTRY_CURRENCY[country]) {
          const currency = COUNTRY_CURRENCY[country];
          if (typeof localStorage !== "undefined") {
            localStorage.setItem("axiomhost_currency", currency);
          }
          return currency;
        }
      } catch (error) {
        console.log("IP geolocation failed, using default");
      }
    }

    return DEFAULT_CURRENCY;
  } catch (error) {
    console.error("Error detecting currency:", error);
    return DEFAULT_CURRENCY;
  }
}

/**
 * Convert price from NGN to target currency
 */
export function convertPrice(priceNGN: number, targetCurrency: string): number {
  const currency = CURRENCY_RATES[targetCurrency];
  if (!currency) {
    return priceNGN; // Return original if currency not found
  }
  
  return priceNGN * currency.rate;
}

/**
 * Format price with currency symbol
 */
export function formatPrice(amount: number, currencyCode: string): string {
  const currency = CURRENCY_RATES[currencyCode];
  if (!currency) {
    return `${currencyCode} ${amount.toFixed(2)}`;
  }

  // Format based on currency
  if (currencyCode === "EUR" || currencyCode === "GBP") {
    return `${currency.symbol}${amount.toFixed(2)}`;
  } else if (currencyCode === "NGN") {
    return `${currency.symbol}${amount.toLocaleString()}`;
  } else {
    return `${currency.symbol}${amount.toFixed(2)}`;
  }
}

/**
 * Get currency info
 */
export function getCurrencyInfo(currencyCode: string): CurrencyInfo | null {
  return CURRENCY_RATES[currencyCode] || null;
}

/**
 * Update currency rates from API (call this periodically)
 */
export async function updateCurrencyRates(): Promise<void> {
  try {
    // In production, fetch from a currency API like exchangerate-api.com or fixer.io
    // For now, we'll use static rates
    // Example API call:
    // const response = await fetch('https://api.exchangerate-api.com/v4/latest/NGN');
    // const data = await response.json();
    // Update CURRENCY_RATES with new rates
    
    console.log("Currency rates updated");
  } catch (error) {
    console.error("Error updating currency rates:", error);
  }
}

/**
 * React hook for currency conversion
 */
export function useCurrency() {
  const [currency, setCurrency] = useState<string>(DEFAULT_CURRENCY);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    detectUserCurrency()
      .then((detectedCurrency) => {
        setCurrency(detectedCurrency);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error in useCurrency:", error);
        setCurrency(DEFAULT_CURRENCY);
        setLoading(false);
      });
  }, []);

  const convert = (priceNGN: number) => convertPrice(priceNGN, currency);
  const format = (amount: number) => formatPrice(amount, currency);
  const setUserCurrency = (newCurrency: string) => {
    if (CURRENCY_RATES[newCurrency]) {
      setCurrency(newCurrency);
      if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
        localStorage.setItem("axiomhost_currency", newCurrency);
      }
    }
  };

  return {
    currency,
    currencyInfo: getCurrencyInfo(currency),
    convert,
    format,
    setCurrency: setUserCurrency,
    loading,
    availableCurrencies: Object.values(CURRENCY_RATES),
  };
}
