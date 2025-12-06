import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SearchInput from './searchInput/SearchInput';
import { Glasses } from 'lucide-react';
import "./style.css"
import ToggleThemeButton from './toggleThemeButton/ToggleThemeButton';
import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';

const MyNav = () => {

  const {isDark} = useContext(ThemeContext)

  return (
    <>
      <Navbar bg={isDark ? "black" : "white"} data-bs-theme={isDark ? "dark" : "light"}>
        <Container>
          <Navbar.Brand
            className='fs-2'
            href="/">
            EpiB{
              (<Glasses
                className="glasses-logo-icon"
              />)
            }ks</Navbar.Brand>
          <Nav className="me-auto d-none d-md-flex">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/browse">Browse</Nav.Link>
          </Nav>
          <SearchInput />
          <ToggleThemeButton />
        </Container>
      </Navbar>
    </>
  )

}

export default MyNav