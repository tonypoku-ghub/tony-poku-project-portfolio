import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: black;
    padding: 0 1rem;
  }

  .navbar-brand,
  .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
      color: white;
    }
  }

  .ml-auto {
    margin-left: auto;
  }
`;

export default function Header(props) {
  const handleMenuSelection = (e) => {
    console.log("Header.js handleMenuSelection called", e.target.id);
    props.setActivePage(e.target.id);
  };

  return (
    <Styles>
      <Navbar expand='lg'>
        <Navbar.Brand href='#home'>Anthony Poku</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link
              href='#aboutme'
              id='aboutme'
              onClick={handleMenuSelection}
            >
              About me
            </Nav.Link>
            <Nav.Link
              href='#portfolio'
              id='portfolio'
              onClick={handleMenuSelection}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              href='#contact'
              id='contact'
              onClick={handleMenuSelection}
            >
              Contact
            </Nav.Link>
            <Nav.Link id='resume' href='#resume' onClick={handleMenuSelection}>
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
}
