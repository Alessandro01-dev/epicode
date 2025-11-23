import { Form, FloatingLabel, Button } from "react-bootstrap"
import { authenticationToken } from "../../../../../../../data/books/studentLogin/studentLogin"
import { useState } from "react"
import "./style.css"

const EditComment = ({ review }) => {

  const [editingReview, setEditingReview] = useState({
    comment: review.comment,
    rate: review.rate,
    elementId: review.elementId
  })

  const editReview = async () => {

    try {

      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${review._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: authenticationToken
        },
        body: JSON.stringify(editingReview)
        })

    } catch (error) {
      console.log(error.message)
    }

  }

  const handlerToEditReviewInputs = (e) => {

    const { name, value } = e.target

    setEditingReview({
      ...editingReview,
      [name]: value
    })

  }

  return (

    <Form
      className="d-flex flex-column m-2"
      onSubmit={(e) => {
        e.preventDefault()
        editReview()
      }}
    >
      <FloatingLabel
        label="Edit this comment"
        className="mb-3"
      >
        <Form.Control
          className="edit-comment-input"
          name="comment"
          as="textarea"
          defaultValue={review.comment}
          onChange={handlerToEditReviewInputs}
        />
      </FloatingLabel>
      <FloatingLabel
        label="Rate from 1 to 5"
        className="mb-3"
      >
        <Form.Control
          className="edit-rate-input"
          name="rate"
          type="number"
          min={1}
          max={5}
          defaultValue={review.rate}
          onChange={handlerToEditReviewInputs}
        />
      </FloatingLabel>
      <Button
        type="submit"
        variant="primary"
        size="sm"
        className="edit-comment-btn align-self-end"
      >
        Edit this comment
      </Button>
    </Form>

  )

}

export default EditComment