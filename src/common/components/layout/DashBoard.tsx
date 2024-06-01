import { PropsWithChildren } from "react"
import "./Dashboard.scss"
import Header from "../form/Header"

function Dashboard(props: PropsWithChildren) {

  return (
    <div className="w-full">
      <div>
        <Header />
        <div className="dashboard-grid">
          <div className="dashboard-grid__side-menu">
          </div>
          <section className="bg-white text-black">
            {props.children}
          </section>
        </div>
      </div>
    </div>
  )
}

export default Dashboard