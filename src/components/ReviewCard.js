/* eslint-disable */
import React from "react";
import "./ReviewCard.css";
import Button from "./Button";

function ReviewCard() {
  return (
    <div className="r-card">
      <img src="/img/card_img.png" alt="사진" ></img>
      <div className="r-card-body">
        <h2 id="review-title">복지명</h2>
        <p>
          <a>기관 사이트</a>
        </p>
        <p>복지 간단 설명</p>
        <div>
          <Button BackColor={"#C7C7C7"} />
        </div>
        <Button BackColor={"#78a8f0"} />
      </div>
    </div>
  );
}

export default ReviewCard;
