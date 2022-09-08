import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Career from "./components/Career";
import Company from "./components/Company";
import Industries from "./components/Industries";
import Products from "./components/Products";
import Service from "./components/Service";
import Soluction from "./components/Soluction";

//card
import Card from "./components/Card";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="/career" element={<Career />} />
        <Route path="/company" element={<Company />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/products" element={<Products />} />
        <Route path="/service" element={<Service />} />
        <Route path="/soluction" element={<Soluction />} />
      </Routes>
      <Card />
      <Footer />
    </div>
  );
}

export default App;
