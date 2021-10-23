import React from 'react'
import logo from '../logo.svg'
import { Container, Image, Nav, Navbar, Offcanvas } from 'react-bootstrap'

function Header() {
  const styles = {
    with: 40,
    height: 40,
  }
  return (
    <Navbar bg="dark" variant="dark" expand={false}>
      <Container fluid>
        <Navbar.Brand href="#">
          <Image style={styles} src={logo} alt="Play Grupetto's Logo" />
          <span className="mx-2">Play Grupetto</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}

export default Header
