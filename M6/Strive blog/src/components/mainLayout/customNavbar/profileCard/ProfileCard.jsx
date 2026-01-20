import { useEffect } from 'react'
import useAuthentication from '../../../../hooks/useAuthentication'
import './ProfileCard.css'
import useScrollDown from '../../../../hooks/useScrollDown'

const ProfileCard = () => {

  const { authData, getProfile } = useAuthentication()

  const shrinkedNavbar = useScrollDown()

  useEffect(() => {
    getProfile()
  }, [])

  return (
    <div
      className="profile-card-container d-flex justify-content-between align-items-center gap-2"
    >
      {authData &&
        <p
          className="profile-card-fullname d-none d-sm-block"
        >{authData?.name} {authData?.surname}</p>
      }
      <div
        className={shrinkedNavbar ? "profile-avatar-shrinked-container" : "profile-avatar-container"}
      >
        <img
          className="w-100 object-fit-cover"
          src={authData?.avatar || 'https://i.pinimg.com/474x/07/c4/72/07c4720d19a9e9edad9d0e939eca304a.jpg'}
          alt="logged user profile picture"
        />
      </div>
    </div>
  )
}

export default ProfileCard