import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SearchInput from './searchInput/SearchInput';
import { Glasses } from 'lucide-react';
import "./style.css"

const MyNav = () => {

  return (
    <>
      <Navbar bg="black" data-bs-theme="dark">
        <Container>
          <Navbar.Brand
            className='fs-2'
            href="#">
            EpiB{
              (<Glasses
                className="glasses-logo-icon"
              />)
            }ks</Navbar.Brand>
          <Nav className="me-auto d-none d-md-flex">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
          </Nav>
          <SearchInput />
        </Container>
      </Navbar>
    </>
  )

}

export default MyNav