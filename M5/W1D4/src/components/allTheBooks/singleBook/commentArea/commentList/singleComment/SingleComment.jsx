import { authenticationToken } from "../../../../../../data/books/studentLogin/studentLogin"
import { Trash2, SquarePen } from "lucide-react"
import "./style.css"
import { useState } from "react"
import EditComment from "./editComment/EditComment"
import MyToast from "../../../../../../utils/myToast/MyToast"

const SingleComment = ({ review }) => {

  const [showMyToast, setShowMyToast] = useState(false)

  const [isToEdit, setIsToEdit] = useState(false)

  const handlerToEditReview = () => {

    setIsToEdit(!isToEdit)

  }

  const renderSuccessToast = () => {

    setShowMyToast(true)

  }

  const formatDate = (isoString) => {

    const date = new Date(isoString);

    const localedateformat = date.toLocaleDateString("it-IT");
    const localetimeformat = date.toLocaleTimeString("it-IT");

    return localedateformat + " at " + localetimeformat

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

      }

    } catch (error) {
      console.log(error.message)
    }

  }

  return (

    <>
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
            <li>{(formatDate(review.createdAt)) + (review.updatedAt === review.createdAt ? "" : (` (edited on ${formatDate(review.updatedAt)})`))}</li>
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
          />
        }
      </div>
      {
        showMyToast && (<MyToast
          show={showMyToast}
          onClose={() => setShowMyToast(false)}
          bg="danger"
          message="Comment deleted successfully!"
        />)
      }
    </>

  )

}

export default SingleComment