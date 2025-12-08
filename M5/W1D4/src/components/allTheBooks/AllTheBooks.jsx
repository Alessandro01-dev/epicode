import { Container, Row, Col, Modal } from "react-bootstrap"
import SingleBook from "./singleBook/SingleBook"
import { useContext, useState } from "react"
import { BookContext } from "../../context/BookContext"
import "./style.css"
import MySpinner from "../../utils/mySpinner/MySpinner"
import MyAlert from "../../utils/myAlert/MyAlert"
import CommentArea from "./singleBook/commentArea/CommentArea"
import { SelectedBookContext } from "../../context/SelectedBookContext"
import { useWindowSize } from "../../hooks/useWindowSize"
import CommentAreaModal from "./commentAreaModal/CommentAreaModal"


const AllTheBooks = () => {

  const size = useWindowSize()

  const [modalShow, setModalShow] = useState(false);

  const { isSelected, setIsSelected } = useContext(SelectedBookContext)

  const { books, isLoading, error } = useContext(BookContext)

  return (

    <>
      <Container
        fluid
        className="main-container py-5"
      >
        <Row>
          <Col
            auto="true"
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
                    selected={() => {
                      setIsSelected(book)
                      setModalShow(true)
                    }}
                  />
                ))}

            </Row>
          </Col>
          <Col
            md={4}
            xs={0}
          >
            {isSelected ? (<CommentArea
              asin={isSelected.asin}
            />) : <MyAlert message="Select a book" />}
          </Col>
        </Row>
      </Container>
      {
        size < 768 && isSelected &&
        <CommentAreaModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          book={isSelected}
        />
      }
    </>

  )

}

export default AllTheBooks