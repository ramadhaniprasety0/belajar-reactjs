import { useState, useEffect } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import {
  Navbar,
  Container,
  Nav,
  Form,
  Row,
  Col,
  NavDropdown,
  Image,
} from 'react-bootstrap';

import { navLinks, loggedInUser, dropdownLinks } from "../data/index";

const NavbarComponentsAfter = () => {
  const [changeColor, setChangeColor] = useState(false);
  const location = useLocation();

  const changeBackgroundColor = () => {
    if (window.scrollY > 10 || location.pathname !== "/") {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();
    window.addEventListener("scroll", changeBackgroundColor);
    return () => {
      window.removeEventListener("scroll", changeBackgroundColor);
    };
  }, [location]);

  return (
    <div>
      <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
        <Container>
          <Navbar.Brand href="#home" className='montserrat-font fw-bold fs-3 text-white'>
            <img src="/findfun.svg" alt="FindFun" width="30" height="30" className='me-2' />FindFun
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-center align-items-center gap-2">
              {navLinks.map((link) => {
                // Tentukan apakah ini link "Home"
                const isHomeLink = link.path === "" || link.path === "/";
                return (
                  <div className="nav-link" key={link.id}>
                    <NavLink
                      to={link.path}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                      }
                      // Tambahkan prop 'end' jika ini link "Home"
                      end={isHomeLink}
                    >
                      {link.text}
                    </NavLink>
                  </div>
                );
              })}
              <Form inline className="d-flex align-items-center">
                <Row>
                  <Col xs="auto">
                    <div className="search-box position-relative">
                      <input
                        type="text"
                        className="form-control pe-5"
                        placeholder="Cari film, musik, artis, dll"
                      />
                      <i className="fa-solid fa-magnifying-glass position-absolute top-50 end-0 translate-middle-y pe-3"></i>
                    </div>
                  </Col>
                  <Col xs="auto">
                    <div className="mx-2 fs-5">|</div>
                  </Col>
                  <Col xs="auto">
                    <NavDropdown
                      title={
                        <Image
                          src={loggedInUser.profilePic}
                          alt={loggedInUser.name}
                          roundedCircle
                          width={35}
                          height={35}
                          className="profile-pic-dropdown"
                        />
                      }
                      id="user-profile-dropdown"
                      align="end"
                      className="profile-dropdown-container"
                    >
                      {dropdownLinks.map((link) => {
                        if (link.type === 'divider') {
                          return <NavDropdown.Divider key={link.id} />;
                        }
                        return (
                          <NavDropdown.Item key={link.id} as={Link} to={link.path}>
                            {link.text}
                          </NavDropdown.Item>
                        );
                      })}
                    </NavDropdown>
                  </Col>
                </Row>
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponentsAfter;