import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../../assets/images/logo.svg";
import { useNavigate } from 'react-router-dom';
export const Header = () => {
    const navigate = useNavigate()
  return (
    <div className="header_wrp">
      <Navbar expand="lg" variant="dark" className="mb-3">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
                <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
                <Nav.Link onClick={() => navigate("/gallery")}>
                  Gallery
                </Nav.Link>
                <Nav.Link onClick={() => navigate("/create")}>Create</Nav.Link>
                <Nav.Link onClick={() => navigate("/connect")}>
                  Connect
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};
