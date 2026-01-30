import Offcanvas from 'react-bootstrap/Offcanvas';
import { Alert, Spinner } from 'react-bootstrap';
import SingleComment from '../singleComment/SingleComment';
import AddComment from '../addComment/AddComment'

const CommentCanvas = ({ show, onHide, commentsData, commentsIsLoading, commentsError }) => {
  return (
    <Offcanvas
      show={show}
      onHide={onHide}
      placement='end'
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Comments</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
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
        {!commentsError && !commentsIsLoading && commentsData && commentsData.map(comment => (<SingleComment
          key={comment._id}
          comment={comment}
        />))}
      </Offcanvas.Body>
    </Offcanvas>
  )
}

export default CommentCanvas