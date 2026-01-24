import { useState } from "react"
import { Form, Button, Spinner, Alert } from "react-bootstrap"
import useAuthentication from "../../../hooks/useAuthentication"
import { useNavigate } from "react-router-dom"

const LoginForm = () => {

  const [loginAuthorForm, setLoginAuthorForm] = useState({
    email: '',
    password: ''
  })

  const { loginAndGetToken, authError, authIsLoading } = useAuthentication()
  const navigate = useNavigate()

  const handleFormOnChange = (e) => {

    const { name, value } = e.target

    setLoginAuthorForm({
      ...loginAuthorForm,
      [name]: value
    })

  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()

    try {
      await loginAndGetToken(loginAuthorForm)
      navigate('/', { replace: true })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Form
      onSubmit={handleFormSubmit}
    >
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleFormOnChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleFormOnChange}
        />
      </Form.Group>
      {authError && (
        <Alert
          className="text-center"
          variant="danger"
        >
          {authError}
        </Alert>
      )}
      <Button
        type="submit"
        className="btn-dark mt-3 d-block w-100"
        disabled={authIsLoading}
      >
        {authIsLoading ? (<Spinner size="sm" />) : 'Log in'}
      </Button>
    </Form>
  )
}

export default LoginForm