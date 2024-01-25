import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.scss';
import '../src/components/Fragments/Navbar/app.scss'
import '../src/components/Fragments/MainBanner/app.scss'
import '../src/components/Fragments/OurValue/app.scss'
import '../src/components/Fragments/NewsList/app.scss'
import '../src/components/Fragments/Footer/app.scss'
import HomePage from './pages';
import ErrorPage from './pages/404';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "*",
    element: <ErrorPage />
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);