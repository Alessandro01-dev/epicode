import { Form, FloatingLabel, Button } from "react-bootstrap"
import { authenticationToken } from "../../../../../data/studentLogin/studentLogin"
import { useState } from "react"
import MyToast from "../../../../../utils/myToast/MyToast"
import MyAlert from "../../../../../utils/myAlert/MyAlert"

const AddComment = ({ asin }) => {

  const [showMyToast, setShowMyToast] = useState(false)

  const [newReview, setNewReview] = useState({
    comment: "",
    rate: 0,
    elementId: asin
  })

  const [showMyAlert, setShowMyAlert] = useState(false)

  const [errorMessage, setErrorMessage] = useState("")

  const renderErrorAlert = () => {

    setShowMyAlert(true)

  }

  const renderSuccessToast = () => {

    setShowMyToast(true)

  }

  const postNewReview = async () => {

    try {

      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: authenticationToken
        },
        body: JSON.stringify(newReview)
      })

      if (response.ok) {

        renderSuccessToast()

      }

    } catch (error) {
      
      setErrorMessage(error.message)

      renderErrorAlert()

    }

  }

  const handlerAddNewReviewInputs = (e) => {

    const { name, value } = e.target

    setNewReview({
      ...newReview,
      [name]: value
    })

  }

  return (
    <>
      <Form
        className="d-flex flex-column m-2 p-2 border"
        onSubmit={(e) => {
          e.preventDefault()
          postNewReview()
        }}
      >
        <FloatingLabel
          label="Write a new comment"
          className="mb-3"
        >
          <Form.Control
            name="comment"
            as="textarea"
            onChange={handlerAddNewReviewInputs}
          />
        </FloatingLabel>
        <FloatingLabel
          label="Rate from 1 to 5"
          className="mb-3"
        >
          <Form.Control
            name="rate"
            type="number"
            min={1}
            max={5}
            onChange={handlerAddNewReviewInputs}
          />
        </FloatingLabel>
        <Button
          type="submit"
          variant="dark"
          size="sm"
        >
          Add a new comment
        </Button>
      </Form>
      {showMyToast && (<MyToast
        show={showMyToast}
        onClose={() => setShowMyToast(false)}
        bg="success"
        message="Comment added successfully!"
      />)}
      {showMyAlert && (<MyAlert 
        message={errorMessage}
        onClose={() => setShowMyAlert(false)}
      />)}
    </>
  )

}

export default AddComment