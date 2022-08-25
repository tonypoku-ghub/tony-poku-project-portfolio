import React from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import projects from "./project_data";

const Styles = styled.div`
  .container {
    display: flex;
    // justify-content: space-between;
    width: 50vw;
    border: 1pt red solid;
    min-height: 35vh;
    max-height: 35vh;
    margin: 2rem auto;
    border: 1pt red solid;
  }

  p {
    padding: 2rem 0;
  }

  header {
    margin: 1rem -3rem;
  }

  section {
    padding: 3rem;
  }
`;

function AboutMe() {
  return (
    <Styles>
      <Container fluid>
        <Row>
          {projects.map((project, index) => (
            <Col xs={4} key={index}>
              <section>
                <Card className='shadow-sm'>
                  <Card.Img variant='top' src={project.imgSrc} />
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.text}</Card.Text>
                    <Button
                      className='mx-1'
                      href={project.website}
                      variant='primary'
                      target='_blank'
                    >
                      View website
                    </Button>
                    <Button
                      className='mx-1'
                      href={project.website}
                      variant='primary'
                      target='_blank'
                    >
                      View Gitub Repo
                    </Button>
                  </Card.Body>
                </Card>
              </section>
            </Col>
          ))}
        </Row>
      </Container>
    </Styles>
  );
}

export default AboutMe;
