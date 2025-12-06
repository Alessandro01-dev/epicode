import MyFooter from "./myFooter/MyFooter"
import MyNav from "./myNav/MyNav"

const MainLayout = ({ children }) => {

  return (

    <>
      <MyNav />
      {children}
      <MyFooter />
    </>

  )

}

export default MainLayout