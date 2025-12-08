import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SearchInput from './searchInput/SearchInput';
import { Glasses } from 'lucide-react';
import "./style.css"
import ToggleThemeButton from './toggleThemeButton/ToggleThemeButton';
import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import { Link } from 'react-router-dom';

const MyNav = () => {

  const {isDark} = useContext(ThemeContext)

  return (
    <>
      <Navbar sticky="top" className="border-bottom" bg={isDark ? "black" : "white"} data-bs-theme={isDark ? "dark" : "light"}>
        <Container>
          <Navbar.Brand
            as={Link}
            className='fs-2'
            to="/">
            EpiB{
              (<Glasses
                className="glasses-logo-icon"
              />)
            }ks</Navbar.Brand>
          <Nav className="me-auto d-none d-md-flex">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/browse">Browse</Nav.Link>
          </Nav>
          <SearchInput />
          <ToggleThemeButton />
        </Container>
      </Navbar>
    </>
  )

}

export default MyNav