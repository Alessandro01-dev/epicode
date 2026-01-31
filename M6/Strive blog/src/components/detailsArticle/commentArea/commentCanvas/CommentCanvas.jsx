import Offcanvas from 'react-bootstrap/Offcanvas';
import { Alert, Button, Spinner } from 'react-bootstrap';
import SingleComment from '../singleComment/SingleComment';
import AddComment from '../addComment/AddComment'
import { Toaster } from 'react-hot-toast';

const CommentCanvas = ({ show, onHide, comments, totalComments, commentsIsLoading, commentsError, getComments, commentsPageSize, loadMoreCommentsHandler }) => {
  return (
    <>
      <Offcanvas
        show={show}
        onHide={onHide}
        placement='end'
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Comments ({totalComments})</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <AddComment
            getComments={getComments}
            commentsPageSize={commentsPageSize}
          />
          {!commentsError && !comments.length > 0 && commentsIsLoading && (
            <Spinner
              className='d-block mx-auto mt-5'
            />
          )}
          {comments.length === 0 && !commentsIsLoading && commentsError && (
            <Alert
              className='text-center'
              variant='danger'
            >
              {commentsError}
            </Alert>
          )}
          {comments.length === 0 && (
            <Alert
              className='text-center'
              variant='warning'
            >
              This article has not comments yet
            </Alert>
          )}
          {comments && comments.map(comment => (<SingleComment
            key={comment._id}
            comment={comment}
          />))}
          {!commentsError && commentsIsLoading && (
            <Spinner
              className='d-block mx-auto mt-5'
            />
          )}
          {totalComments > comments.length && <Button
            className='d-block mt-3 mx-auto rounded-pill'
            size='sm'
            variant='dark'
            onClick={loadMoreCommentsHandler}
          >
            Load more
          </Button>}
        </Offcanvas.Body>
      </Offcanvas>
      <Toaster />
    </>
  )
}

export default CommentCanvas