import { useCurrency } from "@/lib/currency";

interface PriceDisplayProps {
  priceNGN: number;
  originalPriceNGN?: number;
  showOriginal?: boolean;
  className?: string;
}

export default function PriceDisplay({ 
  priceNGN, 
  originalPriceNGN, 
  showOriginal = false,
  className = "" 
}: PriceDisplayProps) {
  const { convert, format, currency, currencyInfo, loading } = useCurrency();
  
  if (loading) {
    return (
      <div className={className}>
        <div className="text-2xl md:text-3xl font-black text-[#1D1E2C]">
          ₦{priceNGN.toLocaleString()}/mo
        </div>
      </div>
    );
  }
  
  const convertedPrice = convert(priceNGN);
  const convertedOriginal = originalPriceNGN ? convert(originalPriceNGN) : null;

  return (
    <div className={className}>
      {showOriginal && convertedOriginal && (
        <div className="text-sm text-slate-400 line-through mb-1">
          {format(convertedOriginal)}
        </div>
      )}
      <div className="flex items-baseline gap-1">
        <span className="text-2xl md:text-3xl font-black text-[#1D1E2C]">
          {format(convertedPrice)}
        </span>
        <span className="text-sm text-slate-600">
          /mo
        </span>
      </div>
      {currency !== "NGN" && (
        <div className="text-xs text-slate-500 mt-1">
          ≈ ₦{priceNGN.toLocaleString()}/mo
        </div>
      )}
    </div>
  );
}

