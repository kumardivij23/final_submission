import React from "react";
import Auth from "./Auth";
import Home from "./components/Home";
import Books from "./components/Books";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/books" element={<Books />} ></Route>
        <Route path="/About" element={<About />} ></Route>
        <Route path="/contact" element={<Contact />} ></Route>
        <Route path="/auth" element={<Auth />}></Route>
      </Routes>
      {/* <Auth /> */}
    </>
  );
}

export default App;
