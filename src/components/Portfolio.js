import React from "react";
import { Card, Button, CardGroup, Container } from "react-bootstrap";
import styled from "styled-components";
import projects from "./project_data";

const Styles = styled.div`
  p {
    padding: 0.5rem 0;
  }

  .card {
    padding: 0.5rem;
    margin: 0.5rem;
    height: auto;
    min-width: 30vw;
  }
`;

function Portfolio() {
  return (
    <Styles name='Portfolio' id='Portfolio'>
      <Container>
        <CardGroup>
          {projects.map((project, index) => (
            <Card className='shadow-sm' key={index}>
              <Card.Img variant='top' src={project.imgSrc} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.text}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button
                  className='mx-1'
                  href={project.website}
                  variant='outline-secondary'
                  target='_blank'
                >
                  View website
                </Button>
                <Button
                  className='mx-1'
                  href={project.website}
                  variant='outline-secondary'
                  target='_blank'
                >
                  View Gitub Repo
                </Button>
              </Card.Footer>
            </Card>
          ))}
        </CardGroup>
      </Container>
    </Styles>
  );
}

export default Portfolio;
