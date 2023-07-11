import React from "react";
import Header from "./header/header";
import Body from "./body/Body";
import HeaderStyle from "../style/header/header.module.css";

const MainComponent = () => {
  return (
    <div>
      <div className={HeaderStyle.Navbar_div}>
        <Header />
      </div>
      <Body />
    </div>
  );
};

export default MainComponent;
