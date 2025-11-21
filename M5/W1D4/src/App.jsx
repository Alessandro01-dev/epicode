import MyNav from "./components/myNav/MyNav"
import MyFooter from "./components/myFooter/MyFooter"
{/*import Welcome from "./components/welcome/Welcome"*/}
import Books from "./data/books/fantasy.json"
import AllTheBooks from "./components/allTheBooks/AllTheBooks"
import { useState, useEffect } from "react"

const App = () => {

  const [books, setBooks] = useState([])

   useEffect(() => {
        setBooks(Books)
    }, [])

  return (

    <div>
      <MyNav 
        books={Books}
        setBooks={setBooks}
      />

      {/* Welcome component M5/W1D4 n.5
      <Welcome />*/}

      <AllTheBooks 
        books={books}
      />
      <MyFooter />
    </div>

  )
}

export default App
