import { ToastContainer, Toast } from "react-bootstrap"

const MyToast = ({ show, onClose, bg, message }) => {

  return (

    <ToastContainer
      className="position-fixed bottom-0 end-0 m-3"
      position="bottom-end"
      style={{ zIndex: 999 }}
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