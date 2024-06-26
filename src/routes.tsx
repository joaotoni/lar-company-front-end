import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/home/Home'
import CreatePerson from './pages/create-person/CreatePerson'
import CellPhoneRegister from './pages/cellphone-register/CellPhoneRegister'
import ListenPage from './pages/listen-page/ListenPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cadastro-de-pessoa",
    element: <CreatePerson />,
  },
  {
    path: "/cadastro-de-telefone",
    element: <CellPhoneRegister />,
  },
  {
    path: "/lista-de-pessoas",
    element: <ListenPage />,
  },
])

function Routes() {

  return <RouterProvider router={router} />

}

export default Routes