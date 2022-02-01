import Link from "next/link";
import { useState } from "react";
import recipesIdEn from "../data/recipes.json";
import Brand from "./Brand";

function Navbar() {
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const recipes = recipesIdEn.en;

  const handleSearchValue = e => {
    const inputValue = e.target.value;
    setSearchValue(inputValue);
    const newFilterRecipes = recipes.filter(val =>
      val.name.toLowerCase().includes(inputValue.toLowerCase())
    );

    if (inputValue === "") {
      setFilteredRecipes([]);
    } else {
      setFilteredRecipes(newFilterRecipes);
    }
  };

  const handleFocusSearch = () => {
    document.querySelector(".search-box input").focus();
    document.querySelector(".nav-middle .search-box input").focus();
  };

  // const handleFocusSearchMobile = () => {
  // };

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
          <li onClick={() => alert(t("common:notAvailable"))}>
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
            <svg
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
              type="text"
              placeholder="Search Recipes"
              value={searchValue}
              onChange={handleSearchValue}
            />
          </div>
          {/* Search Results */}
          {filteredRecipes.length > 0 && (
            <div className="search-results">
              {filteredRecipes.map((recipe, i) => (
                <Link href={`/detail/${recipe.name}`} key={i}>
                  <a>{recipe.name}</a>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* Nav Middle */}
      <div className="nav-middle">
        <div className="search-box">
          <div className="nav-search">
            <svg
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
              onChange={handleSearchValue}
            />
          </div>
          {/* Search Results */}
          {filteredRecipes.length > 0 && (
            <div className="search-results">
              {filteredRecipes.map((recipe, i) => (
                <Link href={`/detail/${recipe.name}`} key={i}>
                  <a>{recipe.name}</a>
                </Link>
              ))}
            </div>
          )}
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
