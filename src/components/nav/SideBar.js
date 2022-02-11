import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-bootstrap";

function SideBar() {

    return (<Navbar expand="lg" >
                <Navbar.Toggle aria-controls="basic-navbar-nav"  />
                <Navbar.Collapse id="basic-navbar-nav" className="navbar navbar-expand-sm" >

                    <Nav className="bruker-nav mx-auto flex-column">
                        <NavLink to="/dashboard" className="nav-link">
                            Dashbord
                        </NavLink>
                        <NavLink to="/bil-bygg" className="nav-link">
                            Bil-Bygg
                        </NavLink>
                        <NavLink to="/Events" className="nav-link">
                            Events
                        </NavLink>
                        <NavLink to="/Adresser" className="nav-link">
                            Adresser
                        </NavLink>
                        <NavLink to="/Konto" className="nav-link">
                            Konto
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    )
};


export default SideBar;