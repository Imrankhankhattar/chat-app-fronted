import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './pages/App';
import Login from './pages/Login'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/login",
    element: <Login/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

