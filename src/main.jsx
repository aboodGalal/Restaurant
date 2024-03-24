import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Menu from './pages/Menu.jsx'
import Catalogue from './pages/Catalogue.jsx'
import Shipping from './pages/Shipping.jsx'
import FAQ from './pages/Faq.jsx'
import Contact from './pages/Contact.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/catalogue",
    element: <Catalogue />,
  },
  {
    path: "/shipping",
    element: <Shipping />,
  },
  {
    path: "/FAQ",
    element: <FAQ />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)

