import React from "react";
import { BrowserRouter as NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import Home from "../home/Home";
// import Login from "../login/Login";
// import Detail from "../characters/CharacterDetails.js";
import Logo from "../images/logo.png";
import Image from "react-bootstrap/Image";
// import Admin from "../../components/Admin";
// import Contact from "../contact/Contact";
import { AuthProvider } from "../../context/AuthContext";
import { useContext } from "react";
import useHistory from "react";
import AuthContext from "../../context/AuthContext";
import Login from "../login/Login";
// import RenderUserNav from "./userNav";
// import Minside from "../Minside";

// import {Container} from "react-bootstrap";
// import { Outlet } from "react-router";


function RenderNavbar() {
  const [auth, setAuth] = useContext(AuthContext);

  const history = useHistory;

  function logout() {
    setAuth(null);
    history.push("/");
  }

  return (
    <AuthProvider>
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="navbar navbar-expand-sm justify-content-flex-start text-center">

          <Nav className="navbar-nav mx-flow">
            {auth ? (
              <>
                | <NavLink onClick={Login}>Admin</NavLink> | <NavLink onClick={logout} className="nav-link">Log out</NavLink>
              </>
            ) : (
              <NavLink onClick={Login} className="nav-link">Login</NavLink>
            )}
            <NavLink href="/registrer" className="nav-link">
              Registrer
            </NavLink>
            <Navbar.Brand href="/" className="mx-auto">
              <Image src={Logo} width="100"></Image>
            </Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    </AuthProvider>
  );
}


export default RenderNavbar;