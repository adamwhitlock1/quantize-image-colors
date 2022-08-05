import "./styles.css";
import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Details from "./Details";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="details/:id" element={<Details />} />
    </Routes>
  );
}
