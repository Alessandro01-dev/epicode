import { Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import LoginPage from "../../components/loginPage/LoginPage";

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

  return isExpired ? <LoginPage /> : <Outlet />
}

export default ProtectedRoutes