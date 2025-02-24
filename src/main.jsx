
// css


import './index.css'
// other
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';
import NewsPage from './pages/NewsPage';
import VideoPage from './pages/VideoPage';
import ContactPage from './pages/ContactPage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <div>404 not found</div>,
  },{
    path:'/home',
    element:<HomePage/>,
  },
   {
    path: '/about',
    element: <AboutPage />
  }, {
    path: '/products',
    element: <ProductPage />
  }, {
    path: '/news',
    element: <NewsPage />
  }, {
    path: '/videos',
    element: <VideoPage />
  }, {
    path: '/contact',
    element: <ContactPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>,
)
