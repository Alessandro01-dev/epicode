import { Spinner } from "react-bootstrap"
import "./style.css"

const MySpinner = () => {

  return (
    <div
      className="d-flex justify-content-center gap-2"
    >
      <Spinner
        className="dot first-dot"
        animation="grow"
      />
      <Spinner
        className="dot second-dot"
        animation="grow"
        timeout={5000}
      />
      <Spinner
        className="dot third-dot"
        animation="grow"
        timeout={10000}
      />
    </div>
  )

}

export default MySpinner