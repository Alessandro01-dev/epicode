import { Container, Row, Col } from "react-bootstrap"
import "./style.css"
import { useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"

const BookDetailsMain = () => {

  const [book, setBook] = useState(null)

  const { asin } = useParams()

  const getBookDetails = async () => {

    try {

      const response = await fetch(`https://epibooks.onrender.com/${asin}`)
      const book = await response.json()

      setBook(book[0])

    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    getBookDetails()
  }, [asin])

  console.log(book)

  return (

    <Container
      fluid
      className="book-details-main-container"
    >
      <Row>
        <Col>
          {book && (
            <div
              className="d-flex flex-column align-items-center gap-4"
            >
              <h2>{book.title}</h2>
              <div
                className="book-details-img-container"
              >
                <img
                  className="w-100 object-fit-cover"
                  src={book.img}
                  alt={book.title}
                />
              </div>
              <div
                className="badge bg-dark"
              >{book.category}</div>
              <div>{book.price}$</div>
            </div>
          )}
        </Col>
      </Row>
    </Container>

  )

}

export default BookDetailsMain