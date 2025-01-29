import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import CartProducts from "./CartProducts";

const NavBar = () => {
  const { t } = useTranslation();

  return (
    <Navbar expand="lg" className="sogei-navbar bg-white shadow-sm" sticky="top">
      <Container fluid className="d-flex align-items-center justify-content-between">
        {/* Brand */}
        <Navbar.Brand href="/" className="navbar-brand fw-bold text-primary me-auto">
          Sogei
        </Navbar.Brand>

        {/* Navigation Links */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/" className="nav-item px-3 text-dark">
              {t("home")}
            </Nav.Link>
            <Nav.Link href="/services" className="nav-item px-3 text-dark">
              {t("services")}
            </Nav.Link>
            <NavDropdown
              title={t("about")}
              id="basic-nav-dropdown"
              className="nav-dropdown px-3"
            >
              <NavDropdown.Item href="/about/company">Company</NavDropdown.Item>
              <NavDropdown.Item href="/about/team">Team</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/about/contact">Contact Us</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/news" className="nav-item px-3 text-dark">
              {t("news")}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/* Actions: Cart and LanguageSwitcher */}
        <div className="d-flex align-items-center">
          <LanguageSwitcher />
          <CartProducts />
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
