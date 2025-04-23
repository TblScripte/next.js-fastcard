'use client';

import { store } from '@/store/store'
import { NextIntlClientProvider } from 'next-intl';
import { Provider } from 'react-redux';

export function AppProviders({
  children,
  locale,
  messages
}: {
  children: React.ReactNode;
  locale: string;
  messages: any;
}) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Provider store={store}>{children}</Provider>
    </NextIntlClientProvider>
  );
}
