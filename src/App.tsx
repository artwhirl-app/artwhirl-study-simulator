import React from 'react';
import { AppFrame } from './AppFrame';
import { theme } from './styles/theme';
import { ThemeProvider } from '@material-ui/core/styles';
import ErrorBoundary from './ErrorBoundary';
import { StudyCalculator } from './pages/StudyCalculator';
import { AppIntlProvider, LocaleKey } from './intl/AppIntlProvider';
import './App.scss';
/**
 * ルートコンポーネント
 * @constructor
 */
export const App: React.FC = () => {
  const [locale, setLocale] = React.useState<LocaleKey>('ja');
  React.useEffect(() => {
    if (window.screen.width > 780) {
      setLocale('ja');
    } else {
      setLocale('ja-sp');
    }
  }, []);
  return (
    <ErrorBoundary>
      <AppIntlProvider locale={locale}>
        <ThemeProvider theme={theme}>
          <AppFrame>
            <StudyCalculator />
          </AppFrame>
        </ThemeProvider>
      </AppIntlProvider>
    </ErrorBoundary>
  );
};
