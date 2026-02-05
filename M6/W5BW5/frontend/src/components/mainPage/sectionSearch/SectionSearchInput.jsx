import { Container, Row, Col, Button } from "react-bootstrap";
import "./style.css";
import useAuthentication from "../../../hooks/useAuthentication";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const SectionSearchInput = () => {

  const {authData, getProfile} = useAuthentication()

  useEffect(() => {
    getProfile()
  }, [])

  const token = localStorage.getItem('token')
  const decodedToken = token ? jwtDecode(token) : null

  return (
    <Container className="mt-4 d-flex flex-column gap-1 section-search bg-white">
      <Row>
        <Col className="d-flex justify-content-between gap-2">
          <div>
            <img
              className="img-account"
              src={decodedToken?.avatar || authData?.avatar || `https://i.pinimg.com/474x/07/c4/72/07c4720d19a9e9edad9d0e939eca304a.jpg`}
              alt="profilo"
            />
          </div>
          <Button className="flex-grow-1 rounded-5 btn-new-post">
            Crea un post
          </Button>
        </Col>
      </Row>
      <Row className="rowButtons">
        <Col className="d-flex justify-content-between">
          <Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <rect x="2" y="5" width="20" height="14" rx="2" fill="#0FC06E" />
              <polygon points="10,8 16,12 10,16" fill="white" />
            </svg>

            <p>Video</p>
          </Button>

          <Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <rect x="2" y="5" width="20" height="14" rx="2" fill="#2D79FF" />
              <circle cx="8" cy="9" r="2" fill="white" />
              <path d="M3 19L9 13L21 19H3Z" fill="white" />
            </svg>

            <p>Foto</p>
          </Button>

          <Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <rect x="2" y="5" width="20" height="14" rx="2" fill="#FF6A30" />
              <line
                x1="6"
                y1="8"
                x2="18"
                y2="8"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="6"
                y1="12"
                x2="18"
                y2="12"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="6"
                y1="16"
                x2="12"
                y2="16"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>

            <p>Scrivi un articolo</p>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default SectionSearchInput;
