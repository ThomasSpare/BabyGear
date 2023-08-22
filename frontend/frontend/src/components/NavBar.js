
import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/CodeCoachLogo_edited.jpg";

const NavBar = () => {
  const { isAuthenticated } = useSelector(state => state.user);


  const authLinks = (
		<React.Fragment>
			<li className='nav-item'>
				<NavLink className='nav-link' to='/dashboard'>
					Dashboard
				</NavLink>
			</li>
			<li className='nav-item'>
				<a className='nav-link' href='#!'>
					Logout
				</a>
			</li>
      </React.Fragment>
	);

  const guestLinks = (
    <React.Fragment>
			<li className='nav-item'>
				<NavLink className='nav-link' to='/login'>
					Login
				</NavLink>
			</li>
			<li className='nav-item'>
				<NavLink className='nav-link' to='/register'>
					Register
				</NavLink>
			</li>
    </React.Fragment>
	);
  
  return (  
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <Link className='navbar-brand' to='/'>
        Code Coach
      </Link>
      <img className="mr-3 rounded mx-auto d-block" src={logo} alt="Code Coach logo"></img>
      <button className="navbar-toggler" 
      type="button" 
      data-bs-toggle="collapse" 
      data-bs-target="/learnnavbarNavDropdown" 
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
          {isAuthenticated ? authLinks : guestLinks }
          <li className="nav-item">
            <NavLink className='nav-link' to='/profile'> 
            Coaches
            </NavLink>
          </li>
        <li className="nav-item dropdown">
          <button className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Learn
          </button>
          <ul className="collapse navbar-collapse">
            <div className="dropdown">
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a id="html" className="dropdown-item" href="/learn">HTML</a>
                <a id="css" className="dropdown-item" href="/learn">CSS</a>
                <a id="python" className="dropdown-item" href="/learn">Python</a>
                <a id="javascript" className="dropdown-item" href="/learn">Javascript</a>
                <a id="django" className="dropdown-item" href="/learn">Django</a>
                <a className="dropdown-item" href="/learn">Databases</a>
                <a className="dropdown-item" href="/learn">Django Restframework</a>
                <a className="dropdown-item" href="/learn">Deplyoing</a>
                <a className="dropdown-item" href="/learn">Testing</a>
              </div>
            </div>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    )
}; 
export default NavBar;