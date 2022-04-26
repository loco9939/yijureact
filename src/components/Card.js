/* eslint-disable */
import React from "react";
import "./Card.css";
import { BsSearch } from "react-icons/bs";

function Card() {
  return (
    <div className="card">
      <img src="img/card_img.png" width=""alt="사진" />
      <div className="card-body">
        <h2 id="card-title">청년 주택 담보 대출</h2>
        <BsSearch className="icon-inline ms-1" /><p className="icon-inline">3.2 <span className="fs-sm">(27)</span></p>
        <p className="fs-sm">복지 서비스 이용후기</p>
        <div className="card-review-container">
          <div className="card-review">
            <BsSearch className="icon-inline" />
            <p>처음에는 좀 부담스러웠는데 막상...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
