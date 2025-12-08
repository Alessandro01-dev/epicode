import { Form, Button } from "react-bootstrap"
import { useContext, useState } from "react";
import { BookContext } from "../../../../context/BookContext";
import "./style.css"
import { ThemeContext } from "../../../../context/ThemeContext";
import { SelectedBookContext } from "../../../../context/SelectedBookContext";

const SearchInput = () => {

  const { setIsSelected } = useContext(SelectedBookContext)

  const { isDark } = useContext(ThemeContext)

  const { allBooks, setBooks } = useContext(BookContext)

  const [searchBook, setSearchBook] = useState("")

  const handlerOnChange = (e) => {

    const { value } = e.target

    setSearchBook(value)

    if (value === "") {

      setIsSelected("")

      setBooks(allBooks)
    }

  }

  const filterBooksBytitle = (e) => {
    e.preventDefault()

    const searchedBook = searchBook.toLowerCase()

    const filteredBooks = allBooks.filter(book => book.title.toLowerCase().includes(searchedBook))

    setIsSelected("")

    setBooks(filteredBooks)

  }

  return (
    <Form
      className="d-flex"
      onSubmit={filterBooksBytitle}
    >
      <Form.Control
        onChange={handlerOnChange}
        type="search"
        placeholder="Search a book..."
        className={`search-input me-2 ${!isDark ? "search-input-light" : "search-input-dark"}`}
        aria-label="Search"
      />
      <Button
        className="search-button"
        type="submit"
        variant={`outline-${isDark ? "light" : "dark"}`}
      >Search</Button>
    </Form>
  );
};

export default SearchInput;