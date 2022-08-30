import React from "react";
import { Card, Button, CardGroup, Container, Stack } from "react-bootstrap";
import styled from "styled-components";
import projects from "./project_data";

const Styles = styled.div`
  .container {
    margin-top: 5rem;
    width: 60vw;
  }

  p {
    padding: 0.5rem 0;
  }

  .card {
    margin: 2rem;
    height: auto;
    width: 15vw;
    min-width: 15vw;
    max-width: 30vw;
    background-color: #a3e9e5;
  }

  .card-group {
    justify-content: space-between !important;
    margin: 0.5rem;
    // padding-bottom: 3rem;
  }
`;

function Portfolio() {
  return (
    <Styles name='Portfolio' id='Portfolio'>
      <Container>
        <header>
          <h3>Portfolio</h3>
        </header>
        <CardGroup>
          {projects.map((project, index) => (
            <Card className='shadow-sm' key={index}>
              <Card.Img variant='top' src={project.imgSrc} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.text}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Stack direction='horizontal'>
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
                </Stack>
              </Card.Footer>
            </Card>
          ))}
        </CardGroup>
      </Container>
    </Styles>
  );
}

export default Portfolio;
