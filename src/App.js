import Front from "./front/Front";
import { Routes, Route } from "react-router-dom";
import ProductPage from "./producs/ProductPage";
import Error404 from "./helper/Error404";
import Checkout from "./checkout/Checkout";
import React from "react";
import Login from "./users/Login";
 
function App() {

  return (
    <Routes>
      <Route path="/" element={<Front />} />
      <Route path="*" element={<Error404 />} />
      <Route path="/product/:pid" element={<ProductPage />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/user" element={<Login/>}/>
    </Routes>
  );
}

export default App;
