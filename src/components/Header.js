import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    max-width: 100vw;
    max-height: 4vh;
    padding-left: 0.5rem;
  }

  .navbar {
    background-color: black;
    margin: 0;
  }

  .navbar-brand,
  .navbar-nav .nav-link {
    color: #bbb;
    font-weight: normal;

    &:hover {
      color: white;
    }
  }

  .navbar-nav .active {
    color: #a3e9e5;

    font-weight: bolder;
  }

  .ml-auto {
    margin-left: auto;
  }
`;

export default function Header(props) {
  const handleMenuSelection = (e) => {
    props.setActivePage(e.target.id);
  };

  return (
    <Styles name='Header' id='Header'>
      <Navbar expand='lg'>
        <Navbar.Brand href='/'>Anthony Poku</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto' defaultActiveKey='#aboutme'>
            <Nav.Link
              href='#aboutme'
              id='aboutme'
              onClick={handleMenuSelection}
              default
            >
              About Me
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
