import books from "../../../books/fantasy.json"
import "./style.css"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


const AllTheBooks = () => {

  return (

    <Container>
      <Row
        className="g-4"
      >

        {books.map(book => (
          <Col
            xs={6}
            md={4}
            lg={3}
            key={book.asin}
          >
            <div
              className="book-card d-flex flex-column justify-content-between h-100 p-3"
            >
              <div
                className="book-card-img-container"
              >
                <img
                  className="w-100 h-100 object-fit-cover"
                  src={book.img}
                  alt={book.title}
                />
              </div>
              <div
                className="d-flex flex-column gap-4 align-items-start justify-content-between"
              >
                <h6
                  className="m-0"
                >{book.title}</h6>
                <div
                  className="d-flex justify-content-between w-100"
                >
                  <span
                    className="badge bg-dark m-0"
                  >{book.category}</span>
                  <p
                    className="m-0"
                  >{book.price} $</p>
                </div>
              </div>
            </div>
          </Col>
        ))}


      </Row>
    </Container>

  )

}

export default AllTheBooks