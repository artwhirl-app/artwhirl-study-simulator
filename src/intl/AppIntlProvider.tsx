import * as React from 'react';
import { IntlProvider } from 'react-intl';
import { PropsWithChildren } from 'react';

export type LocaleKey = 'ja' | 'ja-sp';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const locales: Record<LocaleKey, any> = {
  ja: require('./locales/ja.yml'),
  'ja-sp': require('./locales/ja-sp.yml'),
};

export const AppIntlProvider: React.FC<PropsWithChildren<{ locale: LocaleKey }>> = ({ locale,children }) => {
  return (
    <IntlProvider messages={locales[locale]} locale={locale} defaultLocale="ja">
      {children}
    </IntlProvider>
  );
};
