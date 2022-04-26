/* eslint-disable */
import React from "react";
import styled from "styled-components";

// 1. styled-component 사용해보기
function Button(props) {
  return <StyledButton>내용</StyledButton>;
}

const StyledButton = styled.button`
  width: 250px;
  height: 30px;
  background-color: ${props=>props.color};
  border: none;
  border-radius: 10px;
  color: white;
  margin: 5px;
`;

export default Button;
