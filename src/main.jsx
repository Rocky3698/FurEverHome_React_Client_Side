import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement:<PageNotFound></PageNotFound>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
