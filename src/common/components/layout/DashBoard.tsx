import { PropsWithChildren } from "react"
import Header from "../form/Header"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

function Dashboard(props: PropsWithChildren) {

  return (
    <div className="w-full">
      <div>
        <Header />
        <div className="flex items-center justify-around">
          <ToastContainer
            position="top-right"
            autoClose={5000}  
            hideProgressBar
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <section className="bg-white text-black">
            {props.children}
          </section>
        </div>
      </div>
    </div>
  )
}

export default Dashboard