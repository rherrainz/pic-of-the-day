import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Header = () => {

  return(
  <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><i class="bi bi-stars"></i></Navbar.Brand>
        <Nav className="me-auto container">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="picture">Foto del Día</Link>
            <Link className="nav-link" to="about">Acerca de</Link>
          </Nav>
      </Container>
    </Navbar>

  </>);
}

export default Header