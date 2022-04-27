import React from "react";
import styled from "styled-components";
import IconStar from "./IconStar";
import "./ReviewDetail.css";

const ReviewRight = styled.div`
  width: 620px;
  margin-left: 50px;
  background-color: #7e7e7e;
  text-align: left;
  padding: 0 20px;
`;

function ReviewDetail() {
  return (
    <ReviewRight>
      오른쪽
      <IconStar />
    </ReviewRight>
  );
}

export default ReviewDetail;
