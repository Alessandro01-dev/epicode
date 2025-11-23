import { Alert } from "react-bootstrap"

const MyAlert = ({ message, onClose }) => {

  return (

    <Alert
      className="text-center m-2"
      variant="danger"
      onClose={onClose}
      dismissible
    >
      {message}
    </Alert>

  )

}

export default MyAlert