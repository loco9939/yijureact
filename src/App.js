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
} from "react-bootstrap";
import "./App.css";
import { useState } from "react";
import { Switch, Route, Router } from "react-router-dom";
import NavBarElements from "./components/NavElements";
import SearchBar from "./components/SearchBar";
import DataCenter from "./components/DataCenter";
function App() {
  return (
    <div className="App">
      <NavBarElements></NavBarElements>
      
      <Switch>
        <Route exact path="/">
          <div>메인 페이지</div>
        </Route>
        <Route path="/detail">
          <div>후기 상세 페이지</div>
        </Route>
        <Route path='/DataCenter'>
          <DataCenter />
        </Route>
      <SearchBar></SearchBar>
      </Switch>
    </div>
  );
}

export default App;
