import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/home/Home'
import CreatePerson from './pages/create-person/CreatePerson'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cadastro-de-pessoa",
    element: <CreatePerson />,
  },
])

function Routes() {

  return <RouterProvider router={router} />

}

export default Routes