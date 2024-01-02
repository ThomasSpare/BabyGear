import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import logo from "../assets/images/babygear_BRAND/BGMEDIUMlogo2.png";
import Avatar from "./Avatar";
import { removeTokenTimestamp} from "../utils/utils";



const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  
      const handleSignOut = async () => {
        try{
          await axios.post("profiles/logout");
          setCurrentUser(null);
          removeTokenTimestamp();
          window.location.href = "/";
    } catch (err) {
      // console.log(err)
    }
  };

  const authLinks = (
      <>
    <li className="nav-item">
      <NavLink
        className='nav-item'
        to={`/profiles/${currentUser?.profile_id}`}
        >
        <Avatar src={currentUser?.avatar} text="Profile" height={40} />
      </NavLink>
      </li>
      <li className="nav-item">
      <NavLink className='nav-item' to="/login" onClick={handleSignOut}>
      <i className="fas fa-sign-out-alt"></i>Logout
      </NavLink>
      </li>
      </>
	);

  const guestLinks = (
    <>
    <li>
    <NavLink className='nav-link' to="/signup">
      Sign up
    </NavLink>
    </li>
    <li>
    <NavLink className='nav-link' to="/login">
      Login
    </NavLink>
    </li>
    </>
);

  
  return (  
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <img className="mr-3 rounded-circle border border-black mx-auto d-block" id="mainlogo" width="200" height="200" src={logo} alt="Baby Gear logo"></img>
      <button className="navbar-toggler" 
      type="button" 
      data-bs-toggle="collapse" 
      data-bs-target="#navbarNavDropdown" 
      aria-controls="navbarNavDropdown" 
      aria-expanded="false" 
      aria-label="Toggle navigation">

        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className='nav-link' to='/'> 
            Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className='nav-link' to='/Learn'> 
            Babyproducts
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className='nav-link' to='/mission'> 
            Our Mission
            </NavLink>
            </li>
          {currentUser ? authLinks : guestLinks }

        </ul>
      </div>
    </div>
  </nav>
    )
}; 
export default NavBar;