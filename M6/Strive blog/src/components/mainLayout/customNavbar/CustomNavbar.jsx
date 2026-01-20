import "./CustomNavbar.css"
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import useScrollDown from "../../../hooks/useScrollDown";
import logo from '../../../assets/logo.png'
import ProfileCard from "./profileCard/ProfileCard";

const CustomNavbar = () => {

  const shrinkedNavbar = useScrollDown()

  const isLoginOrRegistrationPage = location.pathname === "/login"

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
              <div
                className="d-flex justify-content-between align-items-center gap-2"
              >
                {!isLoginOrRegistrationPage && <Link
                  to="/newArticlePage"
                  className={`btn btn-lg btn-dark post-article-btn ${shrinkedNavbar ? "shrinked-btn" : ""}`}
                >
                  + Post Article
                </Link>}
                {!isLoginOrRegistrationPage && <ProfileCard />}
              </div>
            </div>
          </Col>
        </Row>
      </Container >
    </Navbar >
  )
}

export default CustomNavbar