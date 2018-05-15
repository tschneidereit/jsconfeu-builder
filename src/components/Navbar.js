import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

// Components
import Hamburger from "../components/Hamburger";

// Images
import logo from "../img/logo.svg";
import logoSquare from "../img/logo-square.svg";

const NavbarLink = props => (
  <li className="navbar__item">
    <Link className="navbar__link" to={props.link}>
      {props.title}
    </Link>
  </li>
);

const Navbar = props => {
  return (
    <div className="navbar">
      <div className="navbar__wrap">
        <NavLink className="navbar__logo" to="/">
          <img src={logo} alt="Mozilla" />
        </NavLink>
        <div className="navbar__mobile">
          <Hamburger />
          <NavLink to="/">
            <img
              className="navbar__logo--mobile"
              src={logoSquare}
              alt="Mozilla"
            />
          </NavLink>
        </div>

        <ul className="navbar__list">
          <li className="navbar__item">
            <NavLink className="navbar__link" to="/code">
              Code a Module
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink className="navbar__link" to="queue">
              What's Coming Next
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink className="navbar__link" to="about">
              About
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink className="navbar__link" to="queue-editor">
              Queue Editor
            </NavLink>
          </li>
        </ul>
        <a
          className="navbar__button"
          href="#"
          onClick={() => props.startAuth("github")}
        >
          <span>Connect with Github</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
