import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Home from "../home/Home";
import Minside from "../minside/Minside";
import Artikler from "../articles2/ArticlePage";
import Butikk from "../minside/Minside";
import Kontakt from "../contact/Contact";
import Login from "../login/Login";
import Garage from "../garage/Garage";
import EditArticle from "../articles2/EditArticles";
import AddArticle from "../articles2/ArticleAdd";
// import ArticleList from "../articles2/ArticleList";
// import ArticlePage from "../articles2/ArticlePage";
// import DashboardPage from "../dashboard/DashboardPage";

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
<Route path="/login" element={<Login />} />
<Route path="/minside" element={<Minside />} />
<Route path="/artikler" element={<Artikler />} />
<Route path="/garasjen" element={<Garage />} />
<Route path="/butikk" element={<Butikk />} />
<Route path="/contact" element={<Kontakt />} />

{/* <Route path="/minside/artikkels" element={<ArticlePage />} /> */}
<Route exact path="minside/artikkels/add/" element={<AddArticle />} />
<Route exact path="/minside/artikkels/edit/:id" element={<EditArticle />} />
</Routes>
</Router>
    </>
    )
};


export default RenderUserNav;