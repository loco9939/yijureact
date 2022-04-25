import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import DataCenter from "./DataCenter";

const NavBarElements = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/">LIFE BUILDER</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/DataCenter">데이터 센터</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/">복지리스트</Link>
            </Nav.Link>
            <Nav.Link href="/About">커뮤니티</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarElements;
