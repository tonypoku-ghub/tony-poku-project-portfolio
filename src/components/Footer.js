import styled from "styled-components";
import { Badge, Col, Container, Row } from "react-bootstrap";

const Styles = styled.div`
  .container {
    flex-direction: column;
    justify-content: end;
    align-items: center;
    position: relative;
    // bottom: 0;
    z-index: 0;
    //border: 1pt red solid;
    min-height: auto !important;
  }

  .badge {
    padding: 1rem;
    margin: 0.5rem;
  }
`;

function Footer(_props) {
  return (
    <Styles name='Footer' id='Footer'>
      <Container>
        <Row>
          <Col>
            <a
              href='https://github.com/tonypoku-ghub'
              target='_blank'
              rel='noreferrer'
            >
              <Badge bg='secondary'>Gitub</Badge>
            </a>{" "}
            <a
              href='https://www.linkedin.com/in/anthony-poku-3b10b734'
              target='_blank'
              rel='noreferrer'
            >
              <Badge bg='secondary'>Linked In</Badge>
            </a>{" "}
            <a
              href='https://twitter.com/toniez'
              target='_blank'
              rel='noreferrer'
            >
              <Badge bg='secondary'>Twitter</Badge>
            </a>
          </Col>
        </Row>
      </Container>
    </Styles>
  );
}

export default Footer;
