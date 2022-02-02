import { useState } from "react";
import Brand from "./Brand";
import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const handleSearchValue = e => {
    setSearchValue(e.target.value);
  };

  const handleFocusSearch = () => {
    document.querySelector(".search-box input").focus();
    document.querySelector(".nav-middle .search-box input").focus();
  };

  const handleTriggerEnter = e => {
    if (e.key === "Enter" && searchValue !== "") {
      setSearchValue("");
      router.push(`/detail?text=${searchValue}`);
    }
  };

  return (
    <div data-aos="fade-down" className="nav-container">
      {/* nav top */}
      <div className="nav-top">
        {/* Brand */}
        <a href="#">
          <Brand />
        </a>
        {/* Nav Item */}
        <ul className="nav-item-container">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li onClick={() => alert("Not Available")}>
            <a>About</a>
          </li>
          <li onClick={handleFocusSearch}>
            <a>Recipes</a>
          </li>
          <li>
            <a href="#mobile-app">Download</a>
          </li>
          <li>
            <a href="#footer">Contact</a>
          </li>
        </ul>
        {/* Search Box */}
        <div className="search-box">
          <div className="nav-search">
            <Link href={`/detail?text=${searchValue}`} passHref>
              <svg
                onClick={() => setSearchValue("")}
                xmlns="http://www.w3.org/2000/svg"
                className="search-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </Link>
            <input
              type="text"
              placeholder="Search Recipes"
              value={searchValue}
              onChange={e => handleSearchValue(e)}
              onKeyUp={e => handleTriggerEnter(e)}
            />
          </div>
        </div>
      </div>
      {/* Nav Middle For Search Box */}
      <div className="nav-middle">
        <div className="search-box">
          <div className="nav-search">
            <svg
              onClick={() => setSearchValue("")}
              xmlns="http://www.w3.org/2000/svg"
              className="search-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              className="input-mobile"
              type="text"
              placeholder="Search Recipes"
              value={searchValue}
              onChange={e => handleSearchValue(e)}
              onKeyUp={e => handleTriggerEnter(e)}
            />
          </div>
        </div>
      </div>
      {/* Nav Bottom */}
      <div className="nav-bottom">
        <ul className="nav-item-container">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li onClick={() => alert("Not Available")}>
            <a>About</a>
          </li>
          <li onClick={handleFocusSearch}>
            <a>Recipes</a>
          </li>
          <li>
            <a href="#mobile-app">Download</a>
          </li>
          <li>
            <a href="#footer">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
