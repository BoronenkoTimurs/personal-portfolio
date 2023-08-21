import { useEffect, useState } from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
  return (
    <NavBar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <NavBar.Brand href="#home">
          <img src={""} alt="Logo" />
        </NavBar.Brand>
        <NavBar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggle-icon"></span>
        </NavBar.Toggle>
        <NavBar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Project
            </Nav.Link>
          </Nav>
          <span className="nabar-text">
            <div className="social-icon">
              <a href="#">
                <img src={""} alt="linkedin" />
              </a>
              <a href="#">
                <img src={""} alt="github" />
              </a>
              <a href="#">
                <img src={""} alt="somethins" />
              </a>
            </div>
            <button className="vvd" onClick={() => console.log("connect")}>
              <span>Lets connect!</span>
            </button>
          </span>
        </NavBar.Collapse>
      </Container>
    </NavBar>
  );
};
