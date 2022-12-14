import { Alert, Container, ListGroup } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .container {
    display: flex;
    width: 60vw;
    // border: 1pt red solid;
    min-height: 50vh !important;
    max-height: 60vh;
    margin: 2rem auto;
  }

  .list-group {
    border: 0;
    padding-right: 1rem;
  }

  h3 {
    padding 3rem 0 1rem;
  }

  .list-group {
    background-color: #cff4fc !important;
  }
`;
function Resume() {
  return (
    <Styles name='Resume' id='Resume'>
      <Container>
        <Alert variant='info'>
          Download my{" "}
          <a href='CV-AP.pdf' target='_blank'>
            resume
          </a>
        </Alert>
        <h3>Front-end Proficiencies</h3>
        <ListGroup variant='flush' bsPrefix='group1'>
          <ListGroup.Item>HTML</ListGroup.Item>
          <ListGroup.Item>CSS</ListGroup.Item>
          <ListGroup.Item>JavaScript</ListGroup.Item>
          <ListGroup.Item>jQuery</ListGroup.Item>
          <ListGroup.Item>React</ListGroup.Item>
          <ListGroup.Item>Graphql</ListGroup.Item>
          <ListGroup.Item>JWT</ListGroup.Item>
        </ListGroup>
        <h3>Back-end Proficiencies</h3>
        <ListGroup variant='flush' bsPrefix='group2'>
          <ListGroup.Item>MongoDB</ListGroup.Item>
          <ListGroup.Item>Express</ListGroup.Item>
          <ListGroup.Item>MySQL/Sequelizer</ListGroup.Item>
          <ListGroup.Item>Node</ListGroup.Item>
        </ListGroup>
      </Container>
    </Styles>
  );
}

export default Resume;
