import "./style.css"
import { Col, Card } from "react-bootstrap"
import { useContext, useState } from "react"
import { ThemeContext } from "../../../context/ThemeContext"
import { Link } from "react-router-dom"

const SingleBook = ({ book, selected }) => {

  const { isDark } = useContext(ThemeContext)

  return (

    <Col
      xs={6}
      sm={4}
      md={6}
      lg={4}
      xl={3}
    >
      <Card
        onClick={selected}
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