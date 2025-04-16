import {NextIntlClientProvider, hasLocale, useLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import "./globals.css"
import Header from './pages/header/header'
import Footer from './pages/footer/footer'
export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body>
        <Header/>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        <Footer/>
      </body>
    </html>
  );
}