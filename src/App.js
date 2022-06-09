import Front from "./front/Front";
import { Routes, Route } from "react-router-dom";
import ProductPage from "./producs/ProductPage";
import Error404 from "./helper/Error404";
import Checkout from "./checkout/Checkout";
import React from "react";
import Login from "./users/Login";
import Modal from "./helper/Modal"; 
import Admin from "./admin/Admin";
import ForgetPassword from "./users/ForgetPassword";
import SignUp from "./users/SignUp";
import Structure from "./admin/dashboard/Structure";
import Ticket from "./dev/Tickets";
import UserDash from "./users/UserDash";



function App() {

  return (
    <Routes>
      <Route path="/" element={<Front />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="*" element={<Error404 />} />
      <Route path="/product/:pid" element={<ProductPage />} />
      <Route path="/checkout/:init" element={<Checkout />} />
      <Route path="/user" element={<Div><Modal show={true}><Login/></Modal></Div>}/>
      <Route path="/forget-password" element={<Modal show={true}><ForgetPassword/></Modal>}/>
      <Route path="/signup" element={<Modal show={true}><SignUp/></Modal>}/>
      <Route path="/dashboard" element={<Structure/>}/>
      <Route path="/ticket" element={<Ticket/>}/>
      <Route path="/userdash" element={<UserDash/>}/>
    </Routes>
  );
}

export default App;

//auto print reciept 

const Div = (props)=><div className="container-fluid bg-danger">{props.children}</div>