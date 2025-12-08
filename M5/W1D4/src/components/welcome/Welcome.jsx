import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "./style.css"

const Welcome = () => {

  return (

    <Container
      fluid
      className="p-0"
    >
      <Row>
        <Col>
          <div
            className="hero-container position-relative"
          >
            <img
              className="w-100 h-100 object-fit-cover"
              src="https://images.pexels.com/photos/159667/book-read-book-picture-book-read-159667.jpeg?_gl=1*1ypfnhl*_ga*MjAwNzI1NDU1OS4xNzYyMDQwODI3*_ga_8JE65Q40S6*czE3NjQxMDkxNjEkbzIkZzEkdDE3NjQxMDkyNDckajU5JGwwJGgw" alt="hero picture" />
            <svg data-testid="arched-text" className="arched-text position-absolute" viewBox="0 0 500 500">
              <path id="curve" d="M 40, 240 A 360,80 0 0,1 400,320" fill="transparent" />
              <text>
                <textPath href="#curve" startOffset="50%">
                  light pages.
                </textPath>
              </text>
            </svg>
            <p
              data-testid="hero-bottom-text"
              className="hero-bottom-text position-absolute"
            >deep stories.</p>
          </div>
        </Col>
      </Row>
    </Container>

  )

}

export default Welcome