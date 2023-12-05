import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter, defer } from 'react-router-dom';
import { lazy } from 'react';
import NotFound from './components/NotFound';

import Articles from './views/articles/Articles';
import ArticleInfo from './views/articles/ArticleInfo';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Articles />
      },
      {
        path: '/:id',
        element: <ArticleInfo />
      },
    ]
  }
]);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
