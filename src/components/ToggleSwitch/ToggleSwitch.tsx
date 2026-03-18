import moon from "../../assets/Moon-Mode.svg"
import sunny from "../../assets/Sunny-Mode.svg"
import { useTheme } from "../../Contexts/useTheme"
import "./ToggleSwitch.css"

export default function ToggleSwitch(){
  const { theme, toggleTheme} = useTheme()

  return(
    <div className={`switch ${theme}`}  onClick={toggleTheme} style={{ cursor: "pointer" }}>
      <button>
        <img 
        src={theme === "dark" ? moon : sunny}
        />
      </button>
    </div>
  )
}