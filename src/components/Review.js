/* eslint-disable */
import React from "react";
import ReviewCard from "./ReviewCard";
import "./Review.css";
import ReviewDetail from "./ReviewDetail";

function Review() {
  return <div className="r-card-box">
    <ReviewCard />
    <ReviewDetail />
  </div>;
}

export default Review;
