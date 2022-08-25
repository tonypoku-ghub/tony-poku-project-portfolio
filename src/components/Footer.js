import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";

const Styles = styled.div`
  .container {
    flex-direction: column;
    justify-content: end;
    align-items: center;
    //border: 1pt red solid;
  }
`;

function Footer(_props) {
  return (
    <Styles>
      <Container>
        <Row>
          <Col>Copyright &copy; anthony poku</Col>
        </Row>
      </Container>
    </Styles>
  );
}

export default Footer;
