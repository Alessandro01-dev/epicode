import MyNav from "./components/myNav/MyNav"
import MyFooter from "./components/myFooter/MyFooter"
import Welcome from "./components/welcome/Welcome"
import AllTheBooks from "./components/allTheBooks/AllTheBooks"
import { BookProvider } from './context/BookContext.jsx';

const App = () => {

  return (

    <BookProvider>
      <MyNav />      
      <Welcome />
      <AllTheBooks />
      <MyFooter />
    </BookProvider>

  )
}

export default App
