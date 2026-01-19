import { Col, Button } from "react-bootstrap"
import "./OauthButtons.css"

const OauthButtons = () => {
  const onClickGithubRedirect = async () => {

    window.location.href = `${URL}/github`

  }

  const onClickGoogleRedirect = async () => {

    window.location.href = `${URL}/google`

  }

  return (
    <div
      className="d-flex justify-content-between align-items-center gap-4"
    >
        <Button
          className="d-flex align-items-center justify-content-center gap-2 mt-5 btn btn-dark w-50"
          onClick={onClickGithubRedirect}
        >
          <div
            className="github-logo-container"
          >
            <img
              className="w-100 object-fit-cover d-block"
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-white-icon.png"
              alt="github logo" />
          </div>
          <p
            className="m-0"
          >Login with Github</p>
        </Button>
        <Button
          className="d-flex align-items-center justify-content-center gap-2 mt-5 btn btn-dark w-50"
          onClick={onClickGoogleRedirect}
        >
          <div
            className="google-logo-container"
          >
            <img
              className="w-100 object-fit-cover d-block"
              src="https://static.vecteezy.com/system/resources/previews/022/613/027/non_2x/google-icon-logo-symbol-free-png.png"
              alt="google logo" />
          </div>
          <p
            className="m-0"
          >Login with Google</p>
        </Button>
    </div>
  )
}

export default OauthButtons