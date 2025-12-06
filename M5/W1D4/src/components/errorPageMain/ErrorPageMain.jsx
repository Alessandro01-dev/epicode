import { Container, Row, Col } from "react-bootstrap"
import "./style.css"

const ErrorPageMain = () => {

  return (

    <Container
      fluid
      className="error-page-main-container"
    >
      <Row>
        <Col>
          <h2
            className="text-center"
          >
            Page not found
          </h2>
        </Col>
      </Row>
    </Container>

  )

}

export default ErrorPageMain