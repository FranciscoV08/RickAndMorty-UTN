import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Home } from './pages/Home.jsx';
import { Contact } from './pages/Contact.jsx';

import{
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import { Characteres } from './pages/Characteres.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Characteres",
    element: <Characteres />
  },
  {
    path: "/Contact",
    element: <Contact />
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)