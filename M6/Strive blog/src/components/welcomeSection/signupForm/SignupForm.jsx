import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import DragDrop from "../../newArticleForm/dragDrop/DragDrop";
import './SignupForm.css'
import useAuthors from '../../../hooks/useAuthors'

const URL = import.meta.env.VITE_BASE_SERVER_URL

const SignupForm = () => {

  const [avatarImageInputMode, setAvatarImageInputMode] = useState("file")

  const [file, setFile] = useState(null);

  const { createAuthor } = useAuthors()

  const [newAuthorForm, setNewAuthorForm] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    dob: '',
    avatar: ''
  })

  const handleFormOnChange = (e) => {

    const { name, value } = e.target

    setNewAuthorForm({
      ...newAuthorForm,
      [name]: value
    })

  }

  const uploadFile = async (file) => {
    const fileData = new FormData()
    fileData.append('avatar', file)
    try {
      const response = await fetch(`${URL}/authors/avatar`, {
        method: 'POST',
        body: fileData
      })
      return await response.json()
    } catch (error) {
      console.log(error)
    }
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()

    let avatarImage = newAuthorForm.avatar

    if (avatarImageInputMode === 'file') {
      if (!file) {
        return
      }
      const uploadedFile = await uploadFile(file)
      if (!uploadedFile) {
        return
      }
      avatarImage = uploadedFile.img
    }

    const totalFormData = {
      ...newAuthorForm,
      avatar: avatarImage
    }
    try {
      await createAuthor(totalFormData)
    } catch (error) {
      console.log(error)
    }
  }


  const switchAvatarImageInputMode = (mode) => {
    setAvatarImageInputMode(mode)

    if (mode === "file") {
      setNewAuthorForm(prev => ({
        ...prev,
        avatar: ""
      }))
    }

    if (mode === "url") {
      setFile(null)
    }
  }

  return (
    <Form
      encType="multipart/form-data"
      onSubmit={handleFormSubmit}
    >
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Name"
          name="name"
          value={newAuthorForm.name}
          onChange={handleFormOnChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Surname</Form.Label>
        <Form.Control
          type="text"
          placeholder="Surname"
          name="surname"
          value={newAuthorForm.surname}
          onChange={handleFormOnChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label
          className="d-flex align-items-center justify-content-between"
        >
          <p
            className="m-0"
          >Avatar image</p>
          <div
            className="d-flex align-items-center justify-content-between gap-2"
          >
            <p
              onClick={() => switchAvatarImageInputMode('file')}
              className={`m-0 avatar-image-mode-selection ${avatarImageInputMode === 'file' ? "text-dark text-decoration-underline" : "text-secondary"}`}
            >Upload file</p>
            <p
              className="m-0"
            >|</p>
            <p
              onClick={() => switchAvatarImageInputMode('url')
              }
              className={`m-0 avatar-image-mode-selection ${avatarImageInputMode === 'url' ? "text-dark text-decoration-underline" : "text-secondary"}`}
            >Paste URL</p>
          </div>
        </Form.Label>
        {avatarImageInputMode === "url" && <Form.Control
          type="url"
          placeholder="Image URL"
          name="avatar"
          value={newAuthorForm.avatar}
          onChange={handleFormOnChange}
        />}
        {avatarImageInputMode === "file" && <DragDrop
          file={file}
          setFile={setFile}
        />}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control
          type="date"
          name="dob"
          value={newAuthorForm.dob}
          onChange={handleFormOnChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Email"
          name="email"
          value={newAuthorForm.email}
          onChange={handleFormOnChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          value={newAuthorForm.password}
          onChange={handleFormOnChange}
        />
      </Form.Group>
      <Button
        type="submit"
        className="btn-dark mt-3 d-block w-100"
      >
        Sign up
      </Button>
    </Form>
  )
}

export default SignupForm