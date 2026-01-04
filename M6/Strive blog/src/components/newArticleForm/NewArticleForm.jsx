import { Col, Container, Form, Row, FloatingLabel, Button } from "react-bootstrap"
import { useState } from "react"
import "./NewArticleForm.css"

const NewArticleForm = () => {

  const [newArticleForm, setNewArticleForm] = useState({
    title: "",
    cover: "",
    category: "",
    readTime: {
      value: 0,
      unit: ""
    },
    author: "",
    content: ""
  })

  const handleFormOnChange = (e) => {

    const { name, value } = e.target

    if (name === "readTimeValue") {
      setNewArticleForm({
        ...newArticleForm,
        readTime: {
          ...newArticleForm.readTime,
          value: value
        }
      })
    } else if (name === "readTimeUnit") {
      setNewArticleForm({
        ...newArticleForm,
        readTime: {
          ...newArticleForm.readTime,
          unit: value
        }
      })
    } else {
      setNewArticleForm({
        ...newArticleForm,
        [name]: value
      })
    }

  }

  const handleFormSubmit = (e) => {
    e.preventDefault()

    console.log("for submitted successfully!")
    console.log(newArticleForm)
  }

  return (
    <Container
      className="py-5"
    >
      <Row>
        <Col>
          <Form
            onSubmit={handleFormSubmit}
          >
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Title"
                name="title"
                value={newArticleForm.title}
                onChange={handleFormOnChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Cover image</Form.Label>
              <Form.Control
                type="url"
                placeholder="Image URL"
                name="cover"
                value={newArticleForm.cover}
                onChange={handleFormOnChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select
                name="category"
                value={newArticleForm.category}
                onChange={handleFormOnChange}
              >
                <option>category 1</option>
                <option>category 2</option>
                <option>category 3</option>
                <option>category 4</option>
                <option>category 5</option>
                <option>category 6</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Read Time</Form.Label>
              <div
                className="d-flex gap-2"
              >
                <Form.Control
                  className="w-50"
                  min={0}
                  max={60}
                  type="number"
                  placeholder="value"
                  name="readTimeValue"
                  value={newArticleForm.readTime.value}
                  onChange={handleFormOnChange}
                />
                <Form.Select
                  name="readTimeUnit"
                  value={newArticleForm.readTime.unit}
                  onChange={handleFormOnChange}
                >
                  <option>seconds</option>
                  <option>minutes</option>
                  <option>hours</option>
                </Form.Select>
              </div>
            </Form.Group>
            <h6
              className="fw-normal"
            >Blog Content</h6>
            <FloatingLabel
              label="Insert here your article..."
            >
              <Form.Control
                as="textarea"
                placeholder="Insert here your article..."
                name="content"
                value={newArticleForm.content}
                onChange={handleFormOnChange}
              />
            </FloatingLabel>
            <Button
              type="submit"
              className="btn-dark mt-3 d-block ms-auto"
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default NewArticleForm