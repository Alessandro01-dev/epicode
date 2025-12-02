import { authenticationToken } from "../../../../../../data/studentLogin/studentLogin"
import { Trash2, SquarePen } from "lucide-react"
import "./style.css"
import { useState } from "react"
import EditComment from "./editComment/EditComment"
import { parseISO } from "date-fns"
import MyAlert from "../../../../../../utils/myAlert/MyAlert"
import toast, { Toaster } from 'react-hot-toast'

const SingleComment = ({ review, getReviews }) => {

  const [isToEdit, setIsToEdit] = useState(false)

  const [showMyAlert, setShowMyAlert] = useState(false)

  const [errorMessage, setErrorMessage] = useState("")

  const renderErrorAlert = () => {

    setShowMyAlert(true)

  }

  const handlerToEditReview = () => {

    setIsToEdit(!isToEdit)

  }

  const renderSuccessToast = () => {

    toast.success("Comment deleted successfully!", {
      duration: 4000,
      position: 'bottom-right',
      style: {
        background: "red"
      }
    })

  }

  const formatDate = (isoString) => {


    // con libreria date-fns

    const date = parseISO(isoString)

    return date.toString().slice(0, 24);

    // o in alternativa con metodo js
    /*
        const date = new Date(isoString);
    
        const localedateformat = date.toLocaleDateString("it-IT");
        const localetimeformat = date.toLocaleTimeString("it-IT");
    
        return localedateformat + " at " + localetimeformat
    */
  }

  const deleteReview = async () => {

    try {

      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${review._id}`, {
        method: "DELETE",
        headers: {
          Authorization: authenticationToken
        },
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

  return (

    <>
      {
        showMyAlert && (<MyAlert
          message={errorMessage}
          onClose={() => setShowMyAlert(false)}
        />)
      }
      <div
        className="border m-2"
      >
        <div
          className="d-flex align-items-start justify-content-between gap-2 m-2"
        >
          <ul
            className="d-flex flex-column justify-content-between align-items-start"
          >
            <li
              className="comment-author-list-item"
            >{review.author}</li>
            <li>{review.comment}</li>
            <li
              className="comment-rate-list-item"
            >{review.rate}</li>
            <li>
              {(formatDate(review.createdAt))}
            </li>
            {review.updatedAt === review.createdAt ? null : (<li>
              (edited on {formatDate(review.updatedAt)})</li>)}
          </ul>
          <div className="review-icons-container d-flex flex-column gap-1 align-items-end">
            <Trash2
              className="review-icon"
              onClick={deleteReview}
            />
            <SquarePen
              className="review-icon"
              onClick={handlerToEditReview}
            />
          </div>
        </div>
        {
          isToEdit &&
          <EditComment
            review={review}
            getReviews={getReviews}
          />
        }
      </div >
      <Toaster />
    </>

  )

}

export default SingleComment