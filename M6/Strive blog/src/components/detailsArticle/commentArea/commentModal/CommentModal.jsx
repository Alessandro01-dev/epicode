import { Modal, Spinner, Alert } from "react-bootstrap"
import './CommentModal.css'
import SingleComment from "../singleComment/SingleComment"
import AddComment from "../addComment/AddComment"

const CommentModal = ({ show, onHide, commentsData, commentsIsLoading, commentsError }) => {
  return (
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
          Comments
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddComment />
        {!commentsError && commentsIsLoading && (
          <Spinner
            className='d-block mx-auto mt-5'
          />
        )}
        {!commentsIsLoading && commentsError && (
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
        {!commentsIsLoading && !commentsError && commentsData && commentsData.map(comment => (<SingleComment
          key={comment._id}
          comment={comment}
        />))}
      </Modal.Body>
    </Modal>
  )
}

export default CommentModal