import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

export const locales = ['en', 'es'];
export const defaultLocale = 'en';

export default getRequestConfig(async ({locale}) => {
  if (!locales.includes(locale as any)) {
    notFound();
  }

  try {
    return {
      messages: (await import(`./messages/${locale}.json`)).default
    };
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    return {
      messages: (await import(`./messages/${defaultLocale}.json`)).default
    };
  }
});