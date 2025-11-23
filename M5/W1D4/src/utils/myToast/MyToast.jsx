import { ToastContainer, Toast } from "react-bootstrap"

const MyToast = ({ show, onClose, bg, message }) => {

  return (

    <ToastContainer
      position="bottom-end"
      className="position-fixed m-3"
    >
      <Toast
        onClose={onClose}
        show={show}
        delay={5000}
        autohide
        bg={bg}  
      >
        <Toast.Header>
          <img
            src="holder.js/20x20?text=%20"
            className="rounded me-2"
            alt=""
          />
          <strong className="me-auto">Epibook</strong>
          <small>just now</small>
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </ToastContainer>

  )

}

export default MyToast