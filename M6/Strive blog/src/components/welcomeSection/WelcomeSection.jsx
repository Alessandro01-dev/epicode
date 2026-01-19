import { Container, Col, Row } from "react-bootstrap"
import SignupForm from "./signupForm/SignupForm"
import ToggleLoginSignup from "./toggleLoginSignup/ToggleLoginSignup"
import LoginForm from "./loginForm/LoginForm"
import { useState } from "react"
import OauthButtons from './oauthButtons/OauthButtons'

const URL = import.meta.env.VITE_BASE_SERVER_URL

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
          <h1
            className="text-center"
          >{isLogin ? "Create new account" : "Enter into your account"}</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <ToggleLoginSignup onToggle={handleToggle} isLogin={isLogin} />
          {isLogin ? <LoginForm /> : <SignupForm />}
        </Col>
      </Row>
      <Row>
        <Col>
          {isLogin ? <OauthButtons /> : null}
        </Col>
      </Row>
    </Container>
  )
}

export default WelcomeSection