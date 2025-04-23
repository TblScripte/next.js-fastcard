import { notFound } from 'next/navigation';
import { hasLocale } from 'next-intl';
import { getMessages } from 'next-intl/server'; 
import { routing } from '@/i18n/routing';
import './globals.css';
import Header from './pages/header/header';
import Footer from './pages/footer/footer';
import { AppProviders } from './pages/appProvider/appProvider';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } =await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages(); 

  return (
    <html lang={locale}>
      <body>
        <Header />
        <AppProviders locale={locale} messages={messages}>
          {children}
        </AppProviders>
        <Footer />
      </body>
    </html>
  );
}
