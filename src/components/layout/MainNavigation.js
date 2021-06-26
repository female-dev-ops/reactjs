import { NavLink } from 'react-router-dom';
import { Navbar, Nav,NavDropdown, Container} from 'react-bootstrap';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">React JS</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href={process.env.PUBLIC_URL + '/home'}>Home</Nav.Link>
      <NavDropdown title="API" id="collasible-nav-dropdown">
        <NavDropdown.Item href={process.env.PUBLIC_URL + '/api-http'}>Http</NavDropdown.Item>
        <NavDropdown.Item href={process.env.PUBLIC_URL + '/api-json'}>Json</NavDropdown.Item>
        <NavDropdown.Item href={process.env.PUBLIC_URL + '/api-firebase'}>Firebase</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  );
};

export default MainNavigation;
