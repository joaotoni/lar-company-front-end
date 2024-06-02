import { PropsWithChildren } from "react"
import Header from "../form/Header"

function Dashboard(props: PropsWithChildren) {

  return (
    <div className="w-full">
      <div>
        <Header />
        <div className="flex items-center justify-around">
          <section className="bg-white text-black">
            {props.children}
          </section>
        </div>
      </div>
    </div>
  )
}

export default Dashboard