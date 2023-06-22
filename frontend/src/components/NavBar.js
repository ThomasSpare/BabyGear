import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/CodeCoachLogo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";


const NavBar = () => {

  return (
  
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="45" />
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <NavLink
              exact="true"
              className={ ({ isActive }) => isActive ? styles.Active : styles.NavLink}
              to="/"
            >
              <i className="fas fa-home"></i>Home
            </NavLink>
            <NavLink
              className={ ({ isActive }) => isActive ? styles.Active : styles.NavLink}
              to="/signin"
            >
              <i className="fas fa-sign-in-alt"></i>Sign in
            </NavLink>
            <NavLink
              to="/signup"
              className={ ({ isActive }) => isActive ? styles.Active : styles.NavLink}
            >
              <i className="fas fa-user-plus"></i>Sign up
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;