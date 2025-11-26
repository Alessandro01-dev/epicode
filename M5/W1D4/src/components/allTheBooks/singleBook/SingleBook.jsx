import "./style.css"
import { Col, Card, Button } from "react-bootstrap"
import { useState } from "react"
import CommentArea from "./commentArea/CommentArea"

const SingleBook = ({ book }) => {

  const [selected, setSelected] = useState(false)

  const handlerSelection = () => {
    setSelected(!selected)
  }

  return (

    <Col
      xs={6}
      sm={4}
      md={3}
      lg={2}
    >
      <Card
        className="book-card"
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
          <Button
            onClick={handlerSelection}
            className="align-self-end book-card-comment-button"
            variant="dark"
            size="sm"
          >
            {`${!selected ? "Show comments" : "Hide comments"}`}
          </Button>
        </Card.Body>
        {selected && (
          <CommentArea 
            asin={book.asin}
          />
        )}
      </Card>
    </Col >

  )

}

export default SingleBook