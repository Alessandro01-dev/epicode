import { useEffect, useState } from 'react'
import useAuthentication from '../../../../hooks/useAuthentication'
import './ProfileCard.css'
import useScrollDown from '../../../../hooks/useScrollDown'
import { jwtDecode } from "jwt-decode";
import { Dropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Edit, LogOut, Settings } from 'lucide-react';

const ProfileCard = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const { authData, getProfile } = useAuthentication()

  const shrinkedNavbar = useScrollDown()

  const navigate = useNavigate();

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

  const toggleProfileCard = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const handleLogout = () => {
    setIsDropdownOpen(false)
    localStorage.removeItem("token")
    navigate("/login")
  }

  return (
    <div
      className="profile-card-container"
      onClick={toggleProfileCard}
    >
      {authData &&
        <p
          className={`${shrinkedNavbar ? "profile-shrinked-fullname" : "profile-fullname"} m-0 px-2 py-1`}
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
      <Dropdown
        align="end"
        show={isDropdownOpen}
        onToggle={toggleProfileCard}
      >
        <Dropdown.Toggle
          variant="link" id="profile-dropdown"
          className="remove-dropdown-toggle"
        />
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to="/newArticlePage"
            className='d-flex align-items-center gap-2'
          >
            <Edit
              size={16}
            />
            Post Article
          </Dropdown.Item>
          <Dropdown.Item
            className='d-flex align-items-center gap-2'
          >
            <Settings
              size={16}
            />
            Settings
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item
            className='d-flex align-items-center gap-2'
            onClick={handleLogout}
          >
            <LogOut
              size={16}
            />
            Log out
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default ProfileCard