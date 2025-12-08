import { Form, FloatingLabel, Button } from "react-bootstrap"
import { authenticationToken } from "../../../../../data/studentLogin/studentLogin"
import { useContext, useState } from "react"
import MyAlert from "../../../../../utils/myAlert/MyAlert"
import toast, { Toaster } from 'react-hot-toast';
import { ThemeContext } from "../../../../../context/ThemeContext";

const AddComment = ({ asin, getReviews }) => {

  const [newReview, setNewReview] = useState({
    comment: "",
    rate: 0,
    elementId: asin
  })

  const [showMyAlert, setShowMyAlert] = useState(false)

  const [errorMessage, setErrorMessage] = useState("")

  const { isDark } = useContext(ThemeContext)

  const renderErrorAlert = () => {

    setShowMyAlert(true)

  }

  const renderSuccessToast = () => {

    toast.success("Comment added successfully!", {
      duration: 4000,
      position: 'bottom-right',
      style: {
        background: "green"
      }
    })

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
        getReviews()

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
        className={`d-flex flex-column m-1 p-2 border border-${isDark ? "black" : "white"} rounded`}
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
          variant={`${isDark ? "dark" : "outline-dark"}`}
          size="sm"
        >
          Add a new comment
        </Button>
      </Form>
      <Toaster />
      {showMyAlert && (<MyAlert
        message={errorMessage}
        onClose={() => setShowMyAlert(false)}
      />)}
    </>
  )

}

export default AddComment