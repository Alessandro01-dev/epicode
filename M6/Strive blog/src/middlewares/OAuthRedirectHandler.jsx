import { useEffect } from "react";
import { Alert, Container, Row, Col } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import "./OAuthRedirectHandler.css"

const OAuthRedirectHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      localStorage.setItem("token", token);
      setTimeout(() => {
        navigate("/", { replace: true })
      }, 3000)
    }
  }, [navigate]);

  return (
    <Container
      className="vh-100"
    >
      <Row
        className="vh-100 align-items-center"
      >
        <Col>
          <div
            className="d-flex flex-column align-items-center"
          >
            <Alert
              className="w-50 text-center"
              variant="success"
            >
              Success! You're logged in
            </Alert>
            <div
              className="oauth-login-success-icon-container py-3"
            >
              <img
                className="w-100 object-fit-cover d-block"
                src="https://cdn-icons-png.flaticon.com/128/5709/5709755.png"
                alt="oauth login success icon" />
            </div>
            <h1
              className="text-center"
            >You're being redirecting...</h1>
          </div>
        </Col>
      </Row>
    </Container>
  )
};

export default OAuthRedirectHandler;