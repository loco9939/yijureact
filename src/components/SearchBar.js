/* eslint-disable */
import React, { useState } from "react";
import "./SearchBar.css";
import { BsSearch } from "react-icons/bs";


// 1. 검색 기능 구현 하기
function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [place, setPlace] = useState("복지 서비스 정책")

  function SearchTarget(e) {
    console.log(searchTerm);
    setSearchTerm(e.target.value);
  }

  return (
    <div className="search-container">
      {/* 1. placeholder input 포커싱 시 사라지게 하기*/}
      <input
        id="search"
        className="srch"
        type="text"
        placeholder="복지 서비스 검색"
      ></input>
      <label htmlFor="search">
          <BsSearch className="icon-src" />
      </label>
    </div>
  );
}

export default SearchBar;
