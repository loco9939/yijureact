import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavElements.css"

const NavBarElements = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/">LIFE BUILDER</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-container box">
            <Nav.Link className="box">
              <Link to="/">데이터 센터</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/">복지리스트</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/">커뮤니티</Link>
            </Nav.Link>

            <Nav.Link>
              <Link to="/">로그인</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/">회원가입</Link>
            </Nav.Link>
          </Nav>
          <div className="box" />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarElements;
