/* eslint-disable */
import React from "react";
import "./NavElements.css";

const NavBarElements = () => {
  return (
    <div className="nav-container">
      <div className="nav-brand">
        <a href="/">LIFE BUILDER</a>
      </div>
      <div className="nav-menu">
        <p>
          <a href="/">데이터 센터</a>
        </p>
        <p>
          <a id="list-center" href="/">복지 리스트</a>
        </p>
        <p>
          <a href="/">커뮤니티</a>
        </p>
      </div>
      <div className="nav-login">
        <p>
          <a href="/">로그인</a>
        </p>
        <p>
          <a id="sign-up" href="/">회원가입</a>
        </p>
      </div>
    </div>
  );
};

export default NavBarElements;
