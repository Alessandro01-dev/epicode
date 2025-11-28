import { Moon, Sun } from "lucide-react"
import "./style.css"
import { useContext } from "react"
import { ThemeContext } from "../../../context/ThemeContext"

const ToggleThemeButton = () => {

  const { isDark, setIsDark } = useContext(ThemeContext)

  const Themehandler = () => {

    setIsDark(!isDark)

  }
  console.log(isDark)
  return (
    <div className="d-flex flex-column align-items-center gap-1 ms-3">

      {isDark ? <Moon className="theme-icon text-white" /> : <Sun
        className="theme-icon text-black"
      />}

      <label className="switch">
        <input
          type="checkbox"
          onClick={Themehandler}
        />
        <span class="slider round"></span>
      </label>
    </div>


  )

}

export default ToggleThemeButton