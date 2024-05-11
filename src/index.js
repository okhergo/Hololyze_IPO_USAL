import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom"

import { ClerkProvider } from '@clerk/clerk-react'

import './index.css'
import AppLayout from './App'
import Home from './routes/Home'
import About from './routes/About'
import Login from './routes/Login'
import ErrorPage from './routes/ErrorPage'
import Pricing from './routes/Pricing'
import Payment from './routes/Payment'
import Settings from './routes/Settings'

const PUBLISHABLE_KEY = "pk_test_aW5zcGlyZWQtbW9vc2UtMy5jbGVyay5hY2NvdW50cy5kZXYk"
 
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    errorElement: <ErrorPage />,
    children: [  
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/pricing',
        element: <Pricing />
      },
      {
        path: '/preferences',
        element: <Settings />
      },
      {
        path: '/payment',
        element: <Payment />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router}/>
    </ClerkProvider>
  </React.StrictMode>
)
