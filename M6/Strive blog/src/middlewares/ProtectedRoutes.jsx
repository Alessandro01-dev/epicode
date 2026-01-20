import { Outlet } from "react-router-dom";
import LoginOrRegistrationPage from "../pages/loginOrRegistrationPage/LoginOrRegistrationPage";
import { jwtDecode } from "jwt-decode";

const isTokenExpired = () => {

  const token = localStorage.getItem('token')

  if (!token) return true;
  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return decodedToken.exp < currentTime;
  } catch (error) {
    console.error('Error decoding token:', error);
    return true;
  }
};

const ProtectedRoutes = () => {
  const isExpired = isTokenExpired()

  return isExpired ? <LoginOrRegistrationPage /> : <Outlet />
}

export default ProtectedRoutes