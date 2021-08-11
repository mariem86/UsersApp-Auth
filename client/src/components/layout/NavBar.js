import React, { Fragment } from "react";
import { Navbar, NavbarBrand, Nav, NavItem,NavLink, Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";

import Register from "../auth/Registre";
import Login from "../auth/Login";

import { Link } from "react-router-dom";
import { logout } from "../../js/action/authAction";

const NavBar = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const user= useSelector((state) => state.authReducer.user)
  return (
    <Navbar className="d-flex justify-content-between" color="dark" dark>
      <NavbarBrand
        tag={() => (
          <Link
            style={{ textDecoration: "none", color: "white", fontSize: "25px" }}
            to="/"
          >
           UserList-Auth
          </Link>
        )}
      />
       <NavItem className="p-2">
              
            </NavItem>
         
            
      <Nav className="text-white">
        {isAuth ? (
          <Fragment>
             <NavItem>
           
                   <Link to="/user-list">
                        {`Welcome ${user.name}`}
                        </Link>
                    </NavItem>
            <NavItem className="p-2">
              <Button onClick={() => dispatch(logout())} color="light">
                Logout
              </Button>
              
            </NavItem>
                
            
           
          </Fragment>
        ) : (
          <Fragment>
            <NavItem className="p-2">
              <Login />
            </NavItem>
            <NavItem className="p-2">
              <Register />
            </NavItem>
            
          </Fragment>
        )}
      </Nav>
    </Navbar>
  );
};

export default NavBar;
