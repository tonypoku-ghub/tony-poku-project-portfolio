import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import avatarImage from "../Assets/images/about_me_avatar.jpg";

const Styles = styled.div`
  .container {
    display: flex;
    max-width: 80vw;
    width: 50vw;
    // border: 1pt red solid;
    min-height: 50vh !important;
    max-height: 70vh;
    margin: 2rem auto;
  }

  p {
    padding: 2rem 0;
  }

  header {
    margin: 1rem -3rem;
  }

  section {
    padding: 3rem;
    margin: 1rem;
  }

  // .shadow-lg {
  //   min-height: 35vh !important;
  // }

  img {
    width: 20vw;
  }

  p {
    font-size: 1vw;
  }

  h3 {
    font-size: 1.5vw;
  }
`;

function AboutMe() {
  return (
    <Styles name='AboutMe' id='AboutMe'>
      <Container className='shadow-lg'>
        <section>
          <header>
            <h3>About Me</h3>
          </header>
          <img src={avatarImage} alt='My Avatar' />
          <p>
            Anthony Poku is a full-stack web developer, who is currently
            enrolled in the Northwestern Full-stack Web Developer Boot Camp.
          </p>
        </section>
      </Container>
    </Styles>
  );
}

export default AboutMe;
