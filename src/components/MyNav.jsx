import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const MyNav = function () {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className=" bg-dark sticky-top "
        data-bs-theme="dark"
      >
        <Container fluid className=" m-0">
          <Link to="/" className=" navbar-brand">
            <img
              src="../public/logo.png"
              alt="logo"
              style={{ width: "100px", height: "55px" }}
            />
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#pricing">Tv Shows</Nav.Link>
              <Nav.Link href="#">Movies</Nav.Link>
              <Nav.Link href="#">Recently Added</Nav.Link>
              <Nav.Link href="#">My List</Nav.Link>
            </Nav>
            <Nav>
              <i className="bi bi-search icons text-white me-3"></i>
              <div className="fw-bold text-white me-3">KIDS</div>
              <i className="bi bi-bell icons text-white me-3"></i>
              <Link to="/settings">
                <i className="bi bi-person-circle icons text-white me-3"></i>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default MyNav;
