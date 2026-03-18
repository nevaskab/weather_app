import {type ReactNode} from "react";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import "./layout.css"

type LayoutProps = {
  children: ReactNode
}

export default function Layout(props: LayoutProps){
  return(
    <div className="container">
      <aside>
        <NavBar/>
      </aside>
      <div className="content">
        <Header/>
          <main>
            {props.children}
          </main>
      </div>
    </div>
  )
}