import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Header(props) {
  const handleMenuSelection = (e) => {
    console.log("Header.js handleMenuSelection called", e.target.id);
    props.setActivePage(e.target.id);
  };

  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Brand href='#home'>Anthony Poku</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link
              href='#aboutme'
              id='aboutme'
              onClick={handleMenuSelection}
            >
              About me
            </Nav.Link>
            <Nav.Link
              id='portfolio'
              href='#portfolio'
              onClick={handleMenuSelection}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link id='contact' href='#contact'>
              Contact
            </Nav.Link>
            <Nav.Link id='resume' href='#resume' onClick={handleMenuSelection}>
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
