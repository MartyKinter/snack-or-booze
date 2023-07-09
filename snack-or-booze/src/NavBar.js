import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar() {
  return (
    <div className="navbar" >
      <Navbar expand="md">
        <NavLink to="/" className="navbar-brand">
          Snack or Booze
        </NavLink>

        <Nav className="nav-tabs" navbar  style={{display:'flex', justifyContent:'space-between'}}>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/snacks">Snacks</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/drinks">Drinks</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/add">Add</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
