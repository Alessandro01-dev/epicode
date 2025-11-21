import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SearchInput from './searchInput/SearchInput';


const MyNav = ({books, setBooks}) => {

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#">MyNav</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
          </Nav>
          <SearchInput 
            books={books}
            setBooks={setBooks}
          />
        </Container>
      </Navbar>
    </>
  )

}

export default MyNav