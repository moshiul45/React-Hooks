import React from "react";
import UseState from "./use-state/useState";
import UseReducer from "./use-reducer/UseReducer";
import UseEffect from "./use-effect/UseEffect";
import "../../style/body/body.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Body = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/use-state" element={<UseState />} />
        <Route path="/use-reducer" element={<UseReducer />} />
        <Route path="/use-effect" element={<UseEffect />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Body;
