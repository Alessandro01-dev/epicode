import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import SingleBook from "./singleBook/SingleBook"
import { useContext } from "react"
import { BookContext } from "../../context/BookContext"
import "./style.css"
import MySpinner from "../../utils/mySpinner/MySpinner"
import MyAlert from "../../utils/myAlert/MyAlert"


const AllTheBooks = () => {

  const { books, isLoading, error } = useContext(BookContext)

  return (

    <Container
      fluid
      className="main-container py-5"
    >
      <Row
        className="g-4"
      >

        {isLoading && <MySpinner />}
        {!isLoading && error && <MyAlert
          message={error}
        />}
        {!isLoading && !error &&
          books.map((book, index) => (
            < SingleBook
              key={`${index}${book.asin}`}
              book={book}
            />
          ))}

      </Row>
    </Container>

  )

}

export default AllTheBooks