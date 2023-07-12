import React from "react";
import UseState from "./use-state/useState";
import UseReducer from "./use-reducer/UseReducer";
import "../../style/body/body.css";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";

const Body = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/use-state" element={<UseState />} />
        <Route path="/use-reducer" element={<UseReducer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Body;
