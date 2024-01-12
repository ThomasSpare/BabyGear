import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import { useEffect } from "react";

import logo from "../assets/images/babygear_BRAND/BGMEDIUMlogo2.png";
import Avatar from "../components/Avatar";
import { removeTokenTimestamp } from "../utils/utils";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const handleSignOut = async () => {
    try {
      const url = `/dj-rest-auth/logout/`;
      await axios.get(url);
      setCurrentUser(null);
      removeTokenTimestamp();
      window.location.href = "/";
    } catch (err) {
      // console.log(err)
    }
  };

  useEffect(() => {}, [currentUser]);
   

  
  const authLinks = (
    <>
      <li className="nav-item">
        <NavLink
          className="nav-link"
          to={`/profiles/profiles/${currentUser?.pk}`}
        >
          Profile
          
        <Avatar
          src={currentUser?.profile_image}
          text="Profile"
          height={40}
        />
      </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/mission">
          Our Mission
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/logout" onClick={handleSignOut}>
          <i className="fas fa-sign-out-alt"></i>Logout
        </NavLink>
      </li>
    </>
  );

  const guestLinks = (
    <>
      <li className="nav-item">
        <NavLink className="nav-link" to="/signup">
          Sign up
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="dj-rest-auth/login/">
          Login
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/logout" onClick={handleSignOut}>
          <i className="fas fa-sign-out-alt"></i>Logout
        </NavLink>
      </li>
    </>
  );

return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <img
          className="mr-3 rounded-circle border border-black mx-auto d-block"
          id="mainlogo"
          width="200"
          height="200"
          src={logo}
          alt="Baby Gear logo"
        ></img>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <h1 id="welcome"> Welcome {currentUser?.username}  </h1>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Learn">
                Babyproducts
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/mission">
                Our Mission
              </NavLink>
            </li>
            {currentUser ? authLinks : guestLinks}
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;