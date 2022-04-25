/* eslint-disable */
import React, { useState } from "react";
import "./SearchBar.css";
import { BsSearch } from "react-icons/bs";

// 1. 검색 기능 구현 하기
function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  function SearchTarget(e) {
    console.log(searchTerm);
    setSearchTerm(e.target.value);
  }

  return (
    <div>
      {/* 1. placeholder input 포커싱 시 사라지게 하기
      2. input 안에 아이콘 넣기 */}
      <input
        className="srch"
        type="text"
        placeholder="복지 서비스 검색"
        onChange={SearchTarget}
      ></input>
      <BsSearch />
    </div>
  );
}

export default SearchBar;
