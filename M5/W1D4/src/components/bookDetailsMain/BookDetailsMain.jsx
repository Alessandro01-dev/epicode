import { Container, Row, Col } from "react-bootstrap"
import "./style.css"
import { useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../context/ThemeContext"

const BookDetailsMain = () => {

  const { isDark } = useContext(ThemeContext)

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
        <Col
          className="m-auto"
          md={6}
          xs={10}
        >
          {book && (
            <div
              className={`d-flex flex-column align-items-center gap-4 m-auto border border-2 border-${isDark ? "black" : "white"} p-5`}
            >
              <h2
                className="text-center"
              >{book.title}</h2>
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