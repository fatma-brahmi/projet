import React from 'react'
import { Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      
    <Link to="/login"><button>Signin</button></Link><Link to="/register"><button>Signup</button></Link>
    </Form>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default Navigation
