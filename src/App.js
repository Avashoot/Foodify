import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";

// body component
//restaurant Container

const AppLayout = () => {
  return (
    <div className="app">
      {/* Header */}
      <Header />

      {/* //Body */}
      <Body />
      {/* //footer */}
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
