import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/home/Home'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
])

function Routes() {

  return <RouterProvider router={router} />

}

export default Routes