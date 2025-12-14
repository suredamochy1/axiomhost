/**
 * Google Translate Helper
 * Handles setting the "googtrans" cookie to trigger translation.
 */

export const setGoogleTranslateCookie = (langCode: string) => {
  // Google Translate expects the cookie "googtrans" with value "/auto/targetLang" or "/sourceLang/targetLang"
  // We assume source is English ('en')
  
  // Map our codes to Google's if necessary (e.g. zh -> zh-CN)
  let targetLang = langCode;
  if (targetLang === 'zh') targetLang = 'zh-CN';
  if (targetLang === 'he') targetLang = 'iw'; // Google uses 'iw' for Hebrew

  // Set cookie for root path and domain
  const cookieValue = `/en/${targetLang}`;
  
  // Set cookie for current domain
  document.cookie = `googtrans=${cookieValue}; path=/; domain=${window.location.hostname}`;
  document.cookie = `googtrans=${cookieValue}; path=/;`;
  
  // For local testing vs production, sometimes domain handling is tricky.
  // Setting it on root path is usually enough.
  
  // Reload the page to trigger the translation script
  window.location.reload();
};

export const clearGoogleTranslateCookie = () => {
  document.cookie = `googtrans=; path=/; domain=${window.location.hostname}; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
  document.cookie = `googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
  window.location.reload();
};
