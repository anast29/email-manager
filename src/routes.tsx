import React, { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router';
import { LazyLoader } from 'components';
import { validateFolderLoader } from 'helpers';
import { DEFAULT_FOLDER_ROUTE, INBOX_ROUTE, NOT_FOUND_ROUTE } from 'constants/Router';
import { NotFoundPage } from 'pages/NotFoundPage';

const AppLayout = LazyLoader(
  lazy(() =>
    import('layouts/AppLayout').then((module) => ({
      default: module.AppLayout,
    }))
  )
);

const EmailsPage = LazyLoader(
  lazy(() =>
    import('pages/EmailsPage').then((module) => ({
      default: module.EmailsPage,
    }))
  )
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: AppLayout,
    children: [
      { index: true, element: <Navigate to={INBOX_ROUTE} replace /> },
      {
        path: DEFAULT_FOLDER_ROUTE,
        element: EmailsPage,
        loader: validateFolderLoader,
      },
    ],
  },
  { path: NOT_FOUND_ROUTE, element: <NotFoundPage /> },
  { path: '*', element: <Navigate to={NOT_FOUND_ROUTE} replace /> },
]);
