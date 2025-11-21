import { Form, Button } from "react-bootstrap"
import { useState } from "react";

const SearchInput = ({ books, setBooks }) => {
  const [allBooks] = useState([...books])
  const [searchBook, setSearchBook] = useState("")

  const handlerOnChange = (e) => {

    const { value } = e.target

    setSearchBook(value)

    if (value === "") {
      setBooks(allBooks)
    }

  }
  console.log(allBooks)

  const filterBooksBytitle = (e) => {
    e.preventDefault()

    const searchedBook = searchBook.toLowerCase()

    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchedBook))

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
        className="me-2"
        aria-label="Search"
      />
      <Button
        type="submit"
        variant="outline-light"
      >Search</Button>
    </Form>
  );
};

export default SearchInput;