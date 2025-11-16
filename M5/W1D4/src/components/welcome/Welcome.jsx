import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const Welcome = () => {

  return (

    <Container
      className="my-5"
    >
      <Row>
        <Col>
          <h1
            className="hero mt-4 text-center"
          >
            Welcome!
          </h1>
          <div>
            {alert("hello")}
          </div>
        </Col>
      </Row>
    </Container>

  )

}

export default Welcome