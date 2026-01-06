import "./CustomNavbar.css"
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import useScrollDown from "../../../hooks/useScrollDown";
import logo from '../../../assets/logo.png'

const CustomNavbar = () => {

  const shrinkedNavbar = useScrollDown()

  return (

    <Navbar className="navbar-main-container">
      <Container>
        <Row
          className="w-100 justify-content-center"
        >
          <Col
            lg={8}
          >
            <div
              className="d-flex align-items-center justify-content-between"
            >
              <Navbar.Brand
                className={`navbar-logo-container ${shrinkedNavbar ? "shrinked-logo" : ""}`}
                as={Link}
                to="/"
              >
                <img
                  src={logo}
                  alt="strive blog logo"
                  className="d-inline-block align-top"
                />
              </Navbar.Brand>
              <Link
                to="/newArticlePage"
                className={`btn btn-lg btn-dark post-article-btn ${shrinkedNavbar ? "shrinked-btn" : ""}`}
              >
                + Post Article
              </Link>
            </div>
          </Col>
        </Row>
      </Container >
    </Navbar >

  )

}

export default CustomNavbar