import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AboutUs from './Component/AboutUs.jsx'
import ContactUs from './Component/ContactUs.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },{
    path: '/AboutUs',
    element: <AboutUs />
  },{
    path: '/ContactUs',
    element: <ContactUs />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
