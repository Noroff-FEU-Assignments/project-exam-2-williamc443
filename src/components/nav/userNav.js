import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Home from "../../components/home/Home";
import Minside from "../../components/Minside";
import Artikler from "../Minside";
import Butikk from "../Minside";
import Kontakt from "../contact/Contact";
import Login from "../login/Login";
import RenderGarage from "../garage/Garage";

function RenderUserNav() {

    return (<>
        <Router>
            <Navbar expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="navbar navbar-expand-sm justify-content-center">

                    <Nav className="bruker-nav mx-auto">
                        <NavLink to="/minside" className="nav-link">
                            Min Side
                        </NavLink>
                        <NavLink to="/artikler" className="nav-link">
                            Artikler
                        </NavLink>
                        <NavLink to="/garasjen" className="nav-link">
                            Garasjen
                        </NavLink>
                        <NavLink to="/butikk" className="nav-link">
                            Butikk
                        </NavLink>
                        <NavLink to="/Contact" className="nav-link">
                            Kontakt
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/login" element={<Login />} />
                <Route path="/minside" element={<Minside />} />
                <Route path="/artikler" element={<Artikler />} />
                <Route path="/garasjen" element={<RenderGarage />} />
                <Route path="/Butikk" element={<Butikk />} />
                <Route exact path="/Contact" element={<Kontakt />} />
            </Routes>

        </Router>
    </>
    )
};


export default RenderUserNav;