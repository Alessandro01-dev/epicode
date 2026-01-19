import { Container, Col, Row } from "react-bootstrap"
import SignupForm from "./signupForm/SignupForm"
import ToggleLoginSignup from "./toggleLoginSignup/ToggleLoginSignup"
import LoginForm from "./loginForm/LoginForm"
import { useState } from "react"

const WelcomeSection = () => {

  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin)
  }

  return (
    <Container
      fluid
    >
      <Row>
        <Col>
          <ToggleLoginSignup onToggle={handleToggle} isLogin={isLogin} />
          {isLogin ? <LoginForm /> : <SignupForm />}
        </Col>
      </Row>
    </Container>
  )
}

export default WelcomeSection