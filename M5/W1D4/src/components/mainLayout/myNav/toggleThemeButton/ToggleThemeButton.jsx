import { Moon, Sun } from "lucide-react"
import "./style.css"
import { useContext } from "react"
import { ThemeContext } from "../../../../context/ThemeContext"

const ToggleThemeButton = () => {

  const { isDark, setIsDark } = useContext(ThemeContext)

  const Themehandler = () => {

    setIsDark(!isDark)

  }
  
  return (
    <div className="d-flex flex-column align-items-center gap-1 ms-3">

      {isDark ? <Moon className="theme-icon text-white" /> : <Sun
        className="theme-icon text-black"
      />}

      <label className="switch">
        <input
          type="checkbox"
          checked={!isDark}
          onChange={Themehandler}
        />
        <span className="slider round"></span>
      </label>
    </div>


  )

}

export default ToggleThemeButton