import React from 'react';
import logo from "../../assets/images/argentBankLogo.png";
import { NavLink, Link } from "react-router-dom";


function Header() {
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
                <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
      <div>
      < NavLink className="main-nav-item" to="/login">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </NavLink>
      </div>
    </nav>
  );
}


export default Header;