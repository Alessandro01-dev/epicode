import { Col, Container, Row } from "react-bootstrap"
import "./style.css"

const BrowseMain = () => {

  return (

   <Container
    fluid
    className="browse-page-main-container"
   >
    <Row>
      <Col>
        <h2
          className="text-center"
        >Browse Page</h2>
      </Col>
    </Row>
   </Container>
    
  )

}

export default BrowseMain