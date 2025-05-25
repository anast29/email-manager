import React, { Suspense } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export const LazyLoader = (Component: React.LazyExoticComponent<React.FC>) => (
  <Suspense fallback={<CircularProgress />}>
    <Component />
  </Suspense>
);
