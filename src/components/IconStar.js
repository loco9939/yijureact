import React from "react";
import { AiFillStar } from "react-icons/ai";
import styled from "styled-components";

const StarPoint = styled.p`
  font-size: 1.5rem;
  display: inline-block;
  vertical-align: bottom;
`;

const StarSpan = styled.span`
  font-size: 1rem;
`;

function IconStar() {
  return (
    <div>
      <StarPoint>
        <AiFillStar />
        2.9 <StarSpan>(35)</StarSpan>
      </StarPoint>
    </div>
  );
}

export default IconStar;
