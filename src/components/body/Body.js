import React from "react";
import UseState from "./use-state/useState";
import "../../style/body/body.css";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";

const Body = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/use-state" element={<UseState />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Body;
