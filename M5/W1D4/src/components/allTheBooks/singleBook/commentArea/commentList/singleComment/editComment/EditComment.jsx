import { Form, FloatingLabel, Button } from "react-bootstrap"
import { authenticationToken } from "../../../../../../../data/studentLogin/studentLogin"
import { useState } from "react"
import "./style.css"
import MyAlert from "../../../../../../../utils/myAlert/MyAlert"
import toast, { Toaster } from "react-hot-toast"

const EditComment = ({ review, getReviews }) => {

  const [showMyAlert, setShowMyAlert] = useState(false)

  const [errorMessage, setErrorMessage] = useState("")

  const [editingReview, setEditingReview] = useState({
    comment: review.comment,
    rate: review.rate,
    elementId: review.elementId
  })

  const renderErrorAlert = () => {

    setShowMyAlert(true)

  }

  const renderSuccessToast = () => {

    toast.success("Comment edited successfully!", {
      duration: 4000,
      position: 'bottom-right',
      style: {
        background: "yellow"
      }
    })

  }

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

      if (response.ok) {

        renderSuccessToast()
        getReviews()


      }

    } catch (error) {

      setErrorMessage(error.message)

      renderErrorAlert()

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
    <>
      {showMyAlert && (<MyAlert
        message={errorMessage}
        onClose={() => setShowMyAlert(false)}
      />)}
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
            data-testid="edit-comment-input-test"
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
          data-testid="edit-comment-btn-test"
        >
          Edit this comment
        </Button>
      </Form>
      <Toaster />
    </>
  )

}

export default EditComment