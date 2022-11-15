import React,{useState,useEffect} from "react";
import './header.scss'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../../assets/images/logo.svg";
import { useNavigate } from 'react-router-dom';
import { routeMap } from "../../rout-map";
export const Header = () => {
    const navigate = useNavigate()
    // const windowScroll  = window.scroll(0);
    const [small, setSmall] = useState(false);
    useEffect(() => {
      if (typeof window !== "undefined") {
        window.addEventListener("scroll", () =>
          setSmall(window.pageYOffset > 50)
        );
      }
    }, []);

  return (

    <div className="header_wrp" style={small ? {backgroundColor: 'rgba(29, 33, 65, 0.5)'} : {backgroundColor: 'transparent'}} >
      <Navbar expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand onClick={() => navigate(routeMap.Home)}>
            <img src={logo} alt="" />
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
                <Nav.Link onClick={() => navigate(routeMap.Home)}>Home</Nav.Link>
                <Nav.Link onClick={() => navigate(routeMap.Gallery)}>
                  Gallery
                </Nav.Link>
                <Nav.Link onClick={() => navigate(routeMap.Create)}>Create</Nav.Link>
                <Nav.Link onClick={() => navigate(routeMap.Connect)}>
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
