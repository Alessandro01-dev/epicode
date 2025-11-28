import MyNav from "./components/myNav/MyNav"
import MyFooter from "./components/myFooter/MyFooter"
import Welcome from "./components/welcome/Welcome"
import AllTheBooks from "./components/allTheBooks/AllTheBooks"
import { BookProvider } from './context/BookContext.jsx';
import { ThemeProvider } from "./context/ThemeContext.jsx";

const App = () => {

  return (

    <ThemeProvider>
      <BookProvider>
        <MyNav />
        <Welcome />
        <AllTheBooks />
        <MyFooter />
      </BookProvider>
    </ThemeProvider>

  )
}

export default App
