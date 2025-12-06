import { useContext } from "react"
import "./style.css"
import { ThemeContext } from "../../../context/ThemeContext"

const MyFooter = () => {

  const { isDark } = useContext(ThemeContext)

  return (

    <>
      <footer
        className={`bottom-0 start-0 end-0 d-flex flex-column flex-md-row justify-content-around p-5 ${isDark ? "bg-black" : "bg-white"}`}
      >
        <div
          className="d-flex flex-column"
        >
          <h6
            className={`text-uppercase ${isDark ? "text-white" : "text-black"}`}>
            company
          </h6>
          <ul
            className="d-flex flex-row flex-md-column gap-2 list-unstyled flex-wrap text-nowrap">
            <li>About</li>
            <li>Press</li>
            <li>Work Here</li>
            <li>Legal</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Contact Us</li>
            <li>Cookie Settings</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
        <div
          className="d-flex flex-column"
        >
          <h6
            className={`text-uppercase ${isDark ? "text-white" : "text-black"}`}>
            company
          </h6>
          <ul
            className="d-flex flex-row flex-md-column gap-2 list-unstyled flex-wrap text-nowrap">
            <li>About</li>
            <li>Press</li>
            <li>Work Here</li>
            <li>Legal</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Contact Us</li>
            <li>Cookie Settings</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
        <div
          className="d-flex flex-column"
        >
          <h6
            className={`text-uppercase ${isDark ? "text-white" : "text-black"}`}>
            company
          </h6>
          <ul
            className="d-flex flex-row flex-md-column gap-2 list-unstyled flex-wrap text-nowrap">
            <li>About</li>
            <li>Press</li>
            <li>Work Here</li>
            <li>Legal</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Contact Us</li>
            <li>Cookie Settings</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </footer>
    </>

  )

}

export default MyFooter