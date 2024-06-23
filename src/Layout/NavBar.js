import React from "react";
import classes from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <ul className={classes.navItems}>
        <li className={classes.navItem}>
          <NavLink to="/home" activeClassName={classes.active}>
            Home
          </NavLink>
        </li>
        <li className={classes.navItem}>
          <NavLink to="/menu" activeClassName={classes.active}>
            Menu
          </NavLink>
        </li>
        <li className={classes.navItem}>
          <NavLink to="/contact" activeClassName={classes.active}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
