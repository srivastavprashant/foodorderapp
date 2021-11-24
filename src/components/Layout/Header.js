import React from "react";
import classes from "./Header.module.css";
const Header = (props) => {
  return (
    <>
      <header className="classes.header">
        <h1>Food Meals</h1>
        <button>Cart</button>
      </header>
      <div>
        <img alt="Food image"></img>
      </div>
    </>
  );
};
export default Header;
