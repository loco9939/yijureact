/* eslint-disable */
import React from "react";
import {
  Navbar,
  Nav,
  Button,
  NavDropdown,
  Form,
  FormControl,
  Container,
  NavbarBrand,
  Card,
  CardGroup,
} from "react-bootstrap";
import "./App.css";
import { useState } from "react";
import { Switch, Route, Router } from "react-router-dom";
import NavBarElements from "./components/NavElements";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <NavBarElements></NavBarElements>

      <Route exact path="/">
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
      </Route>
      {/* 1. 부트 스트랩에 css 주는 방법? */}
      <CardGroup id="card-group">
        <Card style={{ width: "100px" }}>
          <Card.Img variant="top" src="holder.js/100px180" alt="img" />
          <Card.Body>
            <Card.Title id="card-title">행복 사랑 복지</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" alt="img" />
          <Card.Body>
            <Card.Title id="card-title">청년 우대 복지</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" alt="img" />
          <Card.Body>
            <Card.Title id="card-title">자녀 안심 복지</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}

export default App;
