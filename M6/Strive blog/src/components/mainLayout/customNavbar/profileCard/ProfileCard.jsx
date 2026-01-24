import { useEffect } from 'react'
import useAuthentication from '../../../../hooks/useAuthentication'
import './ProfileCard.css'
import useScrollDown from '../../../../hooks/useScrollDown'
import { jwtDecode } from "jwt-decode";

const ProfileCard = () => {

  const { authData, getProfile } = useAuthentication()

  const shrinkedNavbar = useScrollDown()

  const token = localStorage.getItem('token')
  const decodedToken = jwtDecode(token);

  useEffect(() => {
    getProfile()
  }, [])

  const getAvatar = () => {
    if (decodedToken?.avatar) {
      return decodedToken.avatar
    }

    if (authData?.avatar) {
      return authData.avatar
    }

    return 'https://i.pinimg.com/474x/07/c4/72/07c4720d19a9e9edad9d0e939eca304a.jpg'
  }

  return (
    <div
      className="profile-card-container d-flex justify-content-between align-items-center gap-2"
    >
      {authData &&
        <p
          className="profile-card-fullname d-none d-sm-block"
        >{decodedToken?.fullName || `${authData?.name} ${authData?.surname}`}</p>
      }
      <div
        className={shrinkedNavbar ? "profile-avatar-shrinked-container" : "profile-avatar-container"}
      >
        <img
          className="w-100 object-fit-cover"
          src={getAvatar()}
          alt="logged user profile picture"
        />
      </div>
    </div>
  )
}

export default ProfileCard