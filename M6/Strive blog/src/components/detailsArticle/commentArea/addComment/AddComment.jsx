import { FloatingLabel, Form, Button, Spinner, Alert } from 'react-bootstrap'
import './AddComment.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useAuthentication from '../../../../hooks/useAuthentication'
import useComments from '../../../../hooks/useComments'
import { jwtDecode } from "jwt-decode";
import toast from 'react-hot-toast'

const AddComment = ({ getComments }) => {

  const { blogPostId } = useParams()

  const { authData, getProfile } = useAuthentication()

  const { commentsIsLoading, commentsError, createComment } = useComments()

  const token = localStorage.getItem('token')
  const decodedToken = jwtDecode(token);

  useEffect(() => {
    getProfile()
  }, [])

  const [newComment, setNewComment] = useState({
    content: "",
    rating: Number(2)
  })

  console.log(newComment)

  const handleOnChangeForm = (e) => {
    const { name, value } = e.target
    setNewComment({
      ...newComment,
      [name]: value
    })
  }

  const handleSubmitForm = async (e) => {
    e.preventDefault()
    try {
      await createComment(blogPostId, newComment)
      toast.success('Comment created successfully!')
      setNewComment({
        content: ""
      })
      await getComments(blogPostId, 1, 8)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div
      className='add-comment-main-container'
    >
      <div
        className="add-comment-author-profile-container"
      >
        <div
          className="add-comment-author-profile-picture-container"
        >
          <img
            className="w-100 object-fit-cover d-block"
            src={decodedToken?.avatar || authData?.avatar || `https://i.pinimg.com/474x/07/c4/72/07c4720d19a9e9edad9d0e939eca304a.jpg`} alt="add comment author profile picture"
          />
        </div>
        <div
          className="d-flex flex-column"
        >
          <p
            className='m-0'
          >
            {decodedToken?.fullName || `${authData?.name} ${authData?.surname}`}
          </p>
        </div>
      </div>
      <Form
        className='d-flex flex-column'
        onSubmit={handleSubmitForm}
      >
        <FloatingLabel
          controlId="floatingTextarea"
          label="What are your thoughts?"
          className="mb-3"
        >
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            name="content"
            value={newComment.content}
            onChange={handleOnChangeForm}
          />
        </FloatingLabel>
        {commentsError && (
          <Alert
            variant='danger'
          >
            {commentsError}
          </Alert>
        )}
        <Button
          className='align-self-end'
          variant='dark'
          type='submit'
          disabled={commentsIsLoading}
        >
          {commentsIsLoading ? (
            <Spinner
              size='sm'
            />
          ) : "Send"}
        </Button>
      </Form>
    </div>
  )
}

export default AddComment