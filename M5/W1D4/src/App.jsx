import MyNav from "./components/myNav/MyNav"
import MyFooter from "./components/myFooter/MyFooter"
import Welcome from "./components/welcome/Welcome"
import AllTheBooks from "./components/allTheBooks/AllTheBooks"
import { BookProvider } from './context/BookContext.jsx';
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { SelectedBookProvider } from "./context/SelectedBookContext.jsx";

const App = () => {

  return (

    <ThemeProvider>
      <BookProvider>
        <SelectedBookProvider>
          <MyNav />
          <Welcome />
          <AllTheBooks />
          <MyFooter />
        </SelectedBookProvider>
      </BookProvider>
    </ThemeProvider>

  )
}

export default App
