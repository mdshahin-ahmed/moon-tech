import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            Moon Tech
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto ">
              <Nav.Link as={Link} className="text-white" to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} className="text-white" to="/top-rated">
                Top Rated
              </Nav.Link>
              <Nav.Link as={Link} className="text-white" to="/wish-list">
                <i className="fa-solid fa-heart" />{" "}
              </Nav.Link>
              <Nav.Link as={Link} className="text-white" to="/cart">
                <i className="fa-solid fa-cart-shopping" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
