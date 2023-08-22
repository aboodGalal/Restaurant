import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Menu from './pages/menu/Menu.jsx'
import Catalogue from './pages/catalogue/Catalogue.jsx'
import Shipping from './pages/shipping/Shipping.jsx'
import FAQ from './pages/FAQ/Faq.jsx'
import Contact from './pages/contact/Contact.jsx'
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
