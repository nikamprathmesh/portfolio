import Button from 'react-bootstrap/Button';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
const Top_bar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
    <Container>
      <Navbar.Brand className='nav_myname' href="/">Prathmesh Nikam</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className='ms-auto nav_items '>
          <NavLink className='btn1' to="/">Home</NavLink>
          <NavLink className='btn1' to="/about">About</NavLink>
          <NavLink className='btn1' to="/projects">Projects</NavLink>
          <NavLink className='btn1' to="/contact">Contact</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Top_bar