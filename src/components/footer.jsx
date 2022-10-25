import React from "react";
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
    return (

  <Navbar className="d-flex fixed-bottom container flex-wrap justify-content-between align-items-center  my-4 border-top bg-light">
    <p className="col-md-4 mb-0 text-muted">&copy; 2022 RodDev, Inc</p>
    <i class="bi bi-stars"></i>
    <Nav className="nav col-md-4 justify-content-end">
      <Link className="nav-link" to="/">Home</Link>
      <Link className="nav-link" to="picture">Foto del Día</Link>
      <Link className="nav-link" to="about">Acerca de</Link>
    </Nav>
  </Navbar>

    )
}

export default Footer;