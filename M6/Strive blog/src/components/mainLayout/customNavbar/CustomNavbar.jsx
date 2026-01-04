import "./CustomNavbar.css"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

const CustomNavbar = () => {

  return (

    <Navbar className="navbar-main-container">
      <Container>
        <Navbar.Brand
          className="navbar-logo-container"
          as={Link}
          to="/"
        >
          <img
            src="./src/assets/logo.png" alt="strive blog logo"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Link
          to="/newArticlePage"
          className="btn btn-lg btn-dark"
        >
          + Post Article
        </Link>
      </Container>
    </Navbar>

  )

}

export default CustomNavbar