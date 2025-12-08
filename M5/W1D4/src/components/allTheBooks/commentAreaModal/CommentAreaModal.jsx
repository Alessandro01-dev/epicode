import { Modal, Button } from "react-bootstrap"
import CommentArea from "../singleBook/commentArea/CommentArea"
import './style.css'
import { useContext } from "react"
import { ThemeContext } from "../../../context/ThemeContext"

const CommentAreaModal = ({ show, onHide, book }) => {

  const {isDark} = useContext(ThemeContext)

  return (

    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        closeButton
      >
        <Modal.Title id="contained-modal-title-vcenter">
          <div
            className="d-flex align-items-center justify-content-center gap-3"
          >
            <div
              className="modal-title-img-container"
            >
              <img
                className="w-100 object-fit-cover"
                src={book.img}
                alt={book.title}
              />
            </div>
            <h3 className="m-0">{book.title}</h3>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        className="comment-area-modal-body"
      >
        <CommentArea
          asin={book.asin}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant={`${isDark ? "dark" : "outline-dark"}`}
          onClick={onHide}
        >Close</Button>
      </Modal.Footer>
    </Modal>

  )

}

export default CommentAreaModal