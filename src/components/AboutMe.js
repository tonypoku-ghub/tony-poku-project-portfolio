import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import avatarImage from "../Assets/images/about_me_avatar.jpg";

const Styles = styled.div`
  .container {
    display: flex;
    justify-content: center;
    max-width: 30vw;
    padding: 4rem 1rem;
    border: 1pt red solid;
  }
`;

function AboutMe() {
  return (
    <Styles>
      <Container>
        <section className='aboutMe'>
          <div>
            <p>
              Anthony Poku is a full-stack web developer, who is currently
              enrolled in the Northwestern Full-stack Web Developer Boot Camp.
            </p>
          </div>
          <img src={avatarImage} alt='My Avatar' />
        </section>
      </Container>
    </Styles>
  );
}

export default AboutMe;
