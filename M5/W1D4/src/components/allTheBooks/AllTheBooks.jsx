import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import SingleBook from "./singleBook/SingleBook"


const AllTheBooks = ( { books } ) => {

  return (

    <Container
      className="py-5"
    >
      <Row
        className="g-4"
      >

        {books.map(book => (
          < SingleBook
            key={book.asin}
            book={book}
          />
        ))}

      </Row>
    </Container>

  )

}

export default AllTheBooks