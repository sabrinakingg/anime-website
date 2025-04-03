import { Nav, Navbar, NavDropdown  } from 'react-bootstrap'
import { Link } from "react-router-dom";
import ToggleButton from '../features/DarkMode/ToggleButton';

// Import styles
import '../../styles/index.css';

function Header() {
  return (
    <div>
      <Navbar expand="lg" className="customNav">
        <div className='container'>
          <Navbar.Brand as={Link} to="/">AnimeUp</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="justify-content-end">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to='/anime'>Anime</Nav.Link>
                <Nav.Link as={Link} to='/search'>Search</Nav.Link>
                <Nav.Link as={Link} to='/favorites'>Favorites</Nav.Link>
                <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
              </Nav>
              {/* Dark Light mode Toggle */}
              <ToggleButton />
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  )
}

export default Header