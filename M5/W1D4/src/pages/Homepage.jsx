import Welcome from '.././components/welcome/Welcome.jsx'
import AllTheBooks from '.././components/allTheBooks/AllTheBooks.jsx'
import MainLayout from '../components/mainLayout/MainLayout.jsx'

const Homepage = () => {

  return (

    <>
      <MainLayout>
        <Welcome />
        <AllTheBooks />
      </MainLayout>
    </>

  )

}

export default Homepage