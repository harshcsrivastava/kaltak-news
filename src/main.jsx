import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import {Home, Headlines, Business, TechCrunch} from './components/index.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/headlines",
        element: <Headlines/>,
      },
      {
        path: "/business",
        element: <Business/>,
      },
      {
        path: "/tech-crunch",
        element: <TechCrunch/>,
      },
    ],
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
