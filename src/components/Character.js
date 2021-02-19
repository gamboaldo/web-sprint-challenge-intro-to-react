// Write your Character component here
import React, { useState } from "react";
import styled from "styled-components";

export default function Character({ name, gender, birthYear, height, mass }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <StyledCharacter expanded={expanded} onClick={() => setExpanded(!expanded)}>
      <h2>{name}</h2>
      <span className="arrow-down">
        {expanded
          ? `${String.fromCharCode(8963)}`
          : `${String.fromCharCode(8964)}`}
      </span>
      <p>Gender: {gender}</p>
      <p>Birth Year: {birthYear}</p>
      <p>Height: {height}</p>
      <p>Mass: {mass}</p>
    </StyledCharacter>
  );
}

const StyledCharacter = styled.div`
  /* External */
  cursor: pointer;
  margin: 0 auto;
  width: 80%;
  max-width: 80rem;
  /* Internal */
  position: relative;
  height: ${(props) => (props.expanded ? `22rem` : `5rem`)};
  overflow: hidden;
  transition: all 0.7s ease;

  /* Colors and Styles */
  background-color: white;
  border-bottom: 1px solid #bbb;
  opacity: 0.7;
  /*  Element Styles  */
  h2 {
    font-size: 2rem;
    line-height: 5rem;
    margin: 0;
    padding-left: 2rem;
    text-align: left;
  }
  span.arrow-down {
    font-size: 2rem;
    position: absolute;
    top: ${(props) => (props.expanded ? "1.5rem" : "0.7rem")};
    right: 2%;
  }
  p {
    font-size: 1.5rem;
    line-height: 2rem;
    padding-left: 2.2rem;
    text-align: left;
  }
`;
