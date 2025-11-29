import { Container, Row, Col } from "react-bootstrap"
import SingleBook from "./singleBook/SingleBook"
import { useContext } from "react"
import { BookContext } from "../../context/BookContext"
import "./style.css"
import MySpinner from "../../utils/mySpinner/MySpinner"
import MyAlert from "../../utils/myAlert/MyAlert"
import CommentArea from "./singleBook/commentArea/CommentArea"
import { SelectedBookContext } from "../../context/SelectedBookContext"


const AllTheBooks = () => {

  const { isSelected } = useContext(SelectedBookContext)

  const { books, isLoading, error } = useContext(BookContext)

  return (

    <Container
      fluid
      className="main-container py-5"
    >
      <Row>
        <Col
          xs={8}
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
        </Col>
        <Col
          xs={4}
        >
          {isSelected ? (<CommentArea
            asin={isSelected}
          />) : <MyAlert message="Select a book" />}
        </Col>
      </Row>
    </Container>

  )

}

export default AllTheBooks