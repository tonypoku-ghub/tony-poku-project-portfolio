import React from "react";
import styled from "styled-components";
import jumboImage from "../Assets/images/banner.jpg";

const Styles = styled.div`
  .jumbotron {
    background: url(${jumboImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #ccc;
    height: 100px;
    position: static;
    z-index: -2;
    height: 5vh;
  }
`;

function Jumbo() {
  return (
    <Styles name='Jumbo' id='Jumbo'>
      <div className='jumbotron'>{/* <div className='overlay'></div> */}</div>
    </Styles>
  );
}

export default Jumbo;
