import type { ReactNode } from "react"
import "./IconButton.css"

type IconButtonProps = {
    icon: ReactNode
}

export default function IconButton(props: IconButtonProps){
    return(
        <button className="icon-button">
            {props.icon}
        </button>
    )
}