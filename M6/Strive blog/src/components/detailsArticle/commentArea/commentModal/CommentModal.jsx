import { Modal, Spinner, Alert } from "react-bootstrap"
import './CommentModal.css'
import SingleComment from "../singleComment/SingleComment"
import AddComment from "../addComment/AddComment"
import { Toaster } from "react-hot-toast"

const CommentModal = ({ show, onHide, commentsData, commentsIsLoading, commentsError, getComments }) => {
  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        dialogClassName="comment-modal"
        contentClassName="comment-modal-content"
      >
        <Modal.Header
          className="border-0"
          closeButton
        >
          <Modal.Title id="example-custom-modal-styling-title">
            Comments ({commentsData.length})
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddComment
            getComments={getComments}
          />
          {!commentsError && commentsIsLoading && (
            <Spinner
              className='d-block mx-auto mt-5'
            />
          )}
          {commentsData.length === 0 && !commentsIsLoading && commentsError && (
            <Alert
              className='text-center'
              variant='danger'
            >
              {commentsError}
            </Alert>
          )}
          {commentsData.length === 0 && (
            <Alert
              className='text-center'
              variant='warning'
            >
              This article has not comments yet
            </Alert>
          )}
          {commentsData && commentsData.map(comment => (<SingleComment
            key={comment._id}
            comment={comment}
          />))}
        </Modal.Body>
      </Modal>
      <Toaster />
    </>
  )
}

export default CommentModal