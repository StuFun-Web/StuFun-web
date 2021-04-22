import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootstrap from 'react-bootstrap';

const Navbar1 = () => {
    return(
        <ReactBootstrap.Navbar bg="dark" expand="md" variant="dark">
  <ReactBootstrap.Navbar.Brand href="#home" className="ml-2">StuFun</ReactBootstrap.Navbar.Brand>
  <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
  <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
    <ReactBootstrap.Nav className="mr-2 ml-md-auto ml-3">
      <ReactBootstrap.Nav.Link href="#home">About Us</ReactBootstrap.Nav.Link>
      <ReactBootstrap.Nav.Link href="#link">Contact Us</ReactBootstrap.Nav.Link>
    </ReactBootstrap.Nav>
  </ReactBootstrap.Navbar.Collapse>
</ReactBootstrap.Navbar>
    );
}

export default Navbar1;