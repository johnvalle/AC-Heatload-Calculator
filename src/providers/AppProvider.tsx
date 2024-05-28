import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { ErrorFallback } from '@/components';

type AppProviderProps = {
  children?: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense fallback={<p>Loading...</p>}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
    </React.Suspense>
  );
};
