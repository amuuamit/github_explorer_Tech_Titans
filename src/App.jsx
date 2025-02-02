import React from 'react';
import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import ErrorPage from './layout/ErrorPage';
import AppLayout from './Layout/AppLayout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;