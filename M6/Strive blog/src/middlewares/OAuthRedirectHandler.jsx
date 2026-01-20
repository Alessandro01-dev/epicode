import { useEffect } from "react";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const OAuthRedirectHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      localStorage.setItem("token", token);
      setTimeout(() => {
        navigate("/", { replace: true })
      }, 3000)
    }
  }, [navigate]);

  return (
    <>
      <h1>You're been redirecting...</h1>
      <Alert
        variant="success"
      >
        Success! You're logged in
      </Alert>
    </>
  )
};

export default OAuthRedirectHandler;