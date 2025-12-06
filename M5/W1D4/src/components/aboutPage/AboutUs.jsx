import { Col, Container, Row } from "react-bootstrap"
import "./style.css"

const AboutUs = () => {

  return (

    <Container
      fluid
      className="about-us-main-container"
    >
      <Row>
        <Col>
          <h2
            className="text-center"
          >About Page</h2>
        </Col>
      </Row>
    </Container>

  )

}

export default AboutUs