import React from "react";
import styled from "styled-components";
import jumboImage from "../Assets/images/banner.jpg";

const Styles = styled.div`
  .jumbotron {
    background: url(${jumboImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #ccc;
    height: 100px;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

function Jumbo() {
  return (
    <Styles>
      <div className='jumbotron'>
        <div className='overlay'></div>
      </div>
    </Styles>
  );
}

export default Jumbo;
