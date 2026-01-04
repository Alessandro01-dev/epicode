import CustomNavbar from "./customNavbar/CustomNavbar"
import "./MainLayout.css"

const MainLayout = ({ children }) => {

  return (

    <>
      <CustomNavbar />
      <main
        className="main-container"
      >
        {children}
      </main>
    </>

  )
}

export default MainLayout