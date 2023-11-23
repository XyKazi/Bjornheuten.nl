import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './Home.tsx'
import './index.css'
import { Projects } from './Projects.tsx'
import { About } from './About.tsx'
import { NotFound } from './NotFound.tsx'

const router = createBrowserRouter([
  { 
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home/>,
      }, {
        path: "/projects",
        element: <Projects />,
      }, {
        path: '/about',
        element: <About />
      }
    ], 
    errorElement: <NotFound />
  }

])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
