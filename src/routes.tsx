import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
  },
  {
    path: "/home",
  },
])

function Routes() {

  return <RouterProvider router={router} />

}

export default Routes