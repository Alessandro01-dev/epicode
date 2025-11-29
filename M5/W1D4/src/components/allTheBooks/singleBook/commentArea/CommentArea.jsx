import { useState, useEffect, useContext } from "react"
import CommentList from "./commentList/CommentList"
import AddComment from "./addComment/AddComment"
import MySpinner from "../../../../utils/mySpinner/MySpinner"
import MyAlert from "../../../../utils/myAlert/MyAlert"

const CommentArea = ({ asin }) => {

  const [reviews, setReviews] = useState([])

  const [errorMessage, setErrorMessage] = useState("")

  const [showMyAlert, setShowMyAlert] = useState(false)

  const renderErrorAlert = () => {

    setShowMyAlert(true)

  }

  const [showMySpinner, setShowMySpinner] = useState(false)

  const getReviews = async () => {

    setShowMySpinner(true)

    try {

      const response = await fetch(`https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`)

      const data = await response.json()
      setReviews(data)

      return data

    } catch (error) {

      setErrorMessage(error.message)

      renderErrorAlert()

    } finally {

      setShowMySpinner(false)

    }

  }

  useEffect(() => {
    getReviews()
  }, [asin])

  return (
    <>

      {showMyAlert && !showMySpinner && (

        <MyAlert
          message={errorMessage}
          onClose={() => setShowMyAlert(false)}
        />

      )}
      {!errorMessage && showMySpinner && (

        <MySpinner />

      )}

      {!showMySpinner && !showMyAlert &&
        <>
          <CommentList
            reviews={reviews}
            getReviews={getReviews}
          />
          <AddComment
            asin={asin}
            getReviews={getReviews}
          />
        </>
      }

    </>
  )

}

export default CommentArea