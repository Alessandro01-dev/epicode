import "./style.css"
import { Col, Card } from "react-bootstrap"
import { useContext } from "react"
import { ThemeContext } from "../../../context/ThemeContext"
import { SelectedBookContext } from "../../../context/SelectedBookContext"
import { Link } from "react-router-dom"

const SingleBook = ({ book }) => {

  const { isDark } = useContext(ThemeContext)

  const { setIsSelected } = useContext(SelectedBookContext)

  const handlerSelection = () => {
    setIsSelected(book.asin)
  }

  return (

    <Col
      xs={12}
      sm={6}
      md={4}
      lg={3}
    >
      <Card
        onClick={handlerSelection}
        className={`book-card ${isDark ? "book-card-dark" : ""}`}
      >
        <Card.Img
          className="book-card-img"
          variant="top"
          src={book.img}
          alt={book.title}
        />
        <Card.Body
          className="d-flex flex-column gap-3 px-0"
        >
          <Card.Title
            className="book-card-title"
          >
            {book.title}
          </Card.Title>
          <div
            className="d-flex justify-content-between align-items-center"
          >
            <Card.Text
              className="badge bg-dark m-0 book-card-category-badge"
            >
              {book.category}
            </Card.Text>
            <Card.Text>
              {book.price} $
            </Card.Text>
          </div>
          <Link
            to={`/book/${book.asin}`}
            className={`btn btn-sm btn-outline-${isDark ? "light" : "dark"}`}
          >Details</Link>
        </Card.Body>
      </Card>
    </Col >

  )

}

export default SingleBook