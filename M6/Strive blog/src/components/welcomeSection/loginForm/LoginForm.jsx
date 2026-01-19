import { useState } from "react"
import { Form, Button } from "react-bootstrap"

const LoginForm = () => {

  const [loginAuthorForm, setLoginAuthorForm] = useState({
    email: '',
    password: ''
  })

  const handleFormOnChange = (e) => {

    const { name, value } = e.target

    setLoginAuthorForm({
      ...loginAuthorForm,
      [name]: value
    })

  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
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
      <Button
        type="submit"
        className="btn-dark mt-3 d-block w-100"
      >
        Log in
      </Button>
    </Form>
  )
}

export default LoginForm