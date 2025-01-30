import createMiddleware from 'next-intl/middleware';
import {locales, defaultLocale} from './i18n';

function getPreferredLocale(acceptLanguageHeader: string | null) {
  try {
    if (!acceptLanguageHeader) return defaultLocale;
    
    const languages = acceptLanguageHeader
      .split(',')
      .map(lang => lang.split(';')[0].trim().toLowerCase().slice(0, 2))
      .filter(Boolean);
    
    return languages.find(lang => locales.includes(lang)) || defaultLocale;
  } catch (error) {
    return defaultLocale;
  }
}

export default createMiddleware({
  locales,
  defaultLocale,
  localeDetection: true,
  localePrefix: 'always'
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)', '/']
};