/* eslint-disable */
import React from "react";
import "./App.css";
import { useState } from "react";
import { Link, Switch, Route, Router } from "react-router-dom";
import NavBarElements from "./components/NavElements";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import Review from "./components/Review";
import Button from "./components/Button";
import ReviewCard from "./components/ReviewCard";

function App() {
  return (
    <div className="App">
      <NavBarElements></NavBarElements>
      <Route exact path="/">
        <h1>메인 복지 검색 페이지</h1>

        <SearchBar></SearchBar>

        <h2
          style={{
            marginTop: "50px",
            color: "#4668E9",
          }}
        >
          00 개의 복지 서비스 후기
        </h2>
        <p
          style={{
            margin: "15px",
          }}
        >
          이 복지 서비스가 지금 나에게 필요한 복지 서비스일까? 먼저 경험해본
          후기로 판단해보세요 :)
        </p>

        <div className="card-box">
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </Route>
      <Route path="/review" component={Review}></Route>
    </div>
  );
}

export default App;
