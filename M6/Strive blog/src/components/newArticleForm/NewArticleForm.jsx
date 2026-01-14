import { Col, Container, Form, Row, Button } from "react-bootstrap"
import { Editor } from '@tinymce/tinymce-react'
import { useState } from "react"
import "./NewArticleForm.css"
import useBlogPosts from "../../hooks/useBlogPosts"
import DragDrop from "./dragDrop/DragDrop"

const NewArticleForm = () => {

  const [coverImageInputMode, setCoverImageInputMode] = useState("file")

  const [file, setFile] = useState(null);

  const [newArticleForm, setNewArticleForm] = useState({
    title: "",
    cover: "",
    category: "",
    readTime: {
      value: 0,
      unit: ""
    },
    author: "69430120def06e09413f923b",
    content: ""
  })

  const { createBlogPost } = useBlogPosts()

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

  const handleEditorChange = (content) => {
    setNewArticleForm({
      ...newArticleForm,
      content: content
    })
  }

  const uploadFile = async (file) => {
    const fileData = new FormData()
    fileData.append('cover', file)
    try {
      const response = await fetch('http://localhost:4545/blogPosts/cover', {
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

    let coverImage = newArticleForm.cover

    if (coverImageInputMode === 'file') {
      if (!file) {
        return
      }
      const uploadedFile = await uploadFile(file)
      if (!uploadedFile) {
        return
      }
      coverImage = uploadedFile.img
    }

    const totalFormData = {
      ...newArticleForm,
      cover: coverImage
    }
    try {
      await createBlogPost(totalFormData)
    } catch (error) {
      console.log(error)
    }
  }
  console.log(newArticleForm)


  const switchCoverImageInputMode = (mode) => {
    setCoverImageInputMode(mode)

    if (mode === "file") {
      setNewArticleForm(prev => ({
        ...prev,
        cover: ""
      }))
    }

    if (mode === "url") {
      setFile(null)
    }
  }

  return (
    <Container
      className="py-5"
    >
      <Row>
        <Col>
          <Form
            encType="multipart/form-data"
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
              <Form.Label
                className="d-flex align-items-center justify-content-between"
              >
                <p
                  className="m-0"
                >Cover image</p>
                <div
                  className="d-flex align-items-center justify-content-between gap-2"
                >
                  <p
                    onClick={() => switchCoverImageInputMode('file')}
                    className={`m-0 cover-image-mode-selection ${coverImageInputMode === 'file' ? "text-dark text-decoration-underline" : "text-secondary"}`}
                  >Upload file</p>
                  <p
                    className="m-0"
                  >|</p>
                  <p
                    onClick={() => switchCoverImageInputMode('url')
                    }
                    className={`m-0 cover-image-mode-selection ${coverImageInputMode === 'url' ? "text-dark text-decoration-underline" : "text-secondary"}`}
                  >Paste URL</p>
                </div>
              </Form.Label>
              {coverImageInputMode === "url" && <Form.Control
                type="url"
                placeholder="Image URL"
                name="cover"
                value={newArticleForm.cover}
                onChange={handleFormOnChange}
              />}
              {coverImageInputMode === "file" && <DragDrop
                file={file}
                setFile={setFile}
              />}
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
            <Editor
              onEditorChange={handleEditorChange}
              selector='textarea'
              apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
              init={{
                plugins: [
                  'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
                  // Your account includes a free trial of TinyMCE premium features
                  // Try the most popular premium features until Jan 19, 2026:
                  'checklist', 'mediaembed', 'casechange', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'advtemplate', 'ai', 'uploadcare', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown', 'importword', 'exportword', 'exportpdf'
                ],
                toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography uploadcare | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                tinycomments_mode: 'embedded',
                tinycomments_author: 'Author name',
                mergetags_list: [
                  { value: 'First.Name', title: 'First Name' },
                  { value: 'Email', title: 'Email' },
                ],
                ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
                uploadcare_public_key: '315cdb1c3d08db463796',
              }}
              initialValue="Insert here your article"
            />
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