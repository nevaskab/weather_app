import IconButton from "../IconButton/IconButton"
import iconDarkMode from "../../assets/thunderstorm-outline.svg"
import iconLightMode from "../../assets/partly-sunny-outline.svg"
import "./NavBar.css";
import Calendar from "../../assets/Calendar"
import Setting from "../../assets/Setting"
import Dashboard from "../../assets/Dashboard"
import Graphic from "../../assets/Graphic"
import Location from "../../assets/Location"
import { useTheme } from "../../Contexts/useTheme"
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

export default function NavBar() {

  const { theme } = useTheme()

  return (
    <nav className="navbar">
      <div className="main-logo">
        <img 
          src={theme === "dark" ? iconDarkMode : iconLightMode} 
        />
        <h1>Weather Map</h1>
      </div>
      <div className="icon-button-list">
        <IconButton icon={<Dashboard color="currentColor"/>}/>
        <IconButton icon={<Graphic color="currentColor"/>}/>
        <IconButton icon={<Location color="currentColor"/>}/>
        <IconButton icon={<Calendar color="currentColor"/>}/>
        <IconButton icon={<Setting color="currentColor"/>}/>
      </div>
      <ToggleSwitch />
    </nav>
  );
}
