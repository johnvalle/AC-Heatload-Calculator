import { MantineProvider } from '@mantine/core';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { I18nextProvider } from 'react-i18next';

import { ErrorFallback } from '@/components';
import i18n from '@/i18n';

type AppProviderProps = {
  children?: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <I18nextProvider i18n={i18n}>
      <MantineProvider>
        <React.Suspense fallback={<p>Loading...</p>}>
          <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
        </React.Suspense>
      </MantineProvider>
    </I18nextProvider>
  );
};
