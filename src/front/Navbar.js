import "./css/Navbar.css";
import {BsFillPersonFill, BsFillCartFill,BsFillHeartFill} from "react-icons/bs"; 
import { ImLeaf } from "react-icons/im";
import { Link} from "react-router-dom";
import { useState } from "react";
import Login from "../users/Login";
import ForgetPassword from "../users/ForgetPassword";
import { NavItems } from "../helper/Navigation";
const style = {
  background: "#78ffd6",
  background: "-webkit-linear-gradient(to left, #78ffd6, #a8ff78)",
  background: "linear-gradient(to left, #78ffd6, #a8ff78)",
};
export default function Navbar() {

  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
        <div className="container d-flex flex-inline">
          <Link className="navbar-brand d-flex flex-inline " to="/">
            <span>
              <ImLeaf color="#e45574" size={"1.5em"} />
            </span>
          </Link>
          <form className="d-flex w-50 mx-auto my-auto  " role="search">
            <input
              className="form-control search "
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <ul className="nav">
            <NavItems where="/user">
              <BsFillPersonFill
                size="1.2em"
                color="#e45574"
                style={{ cursor: "pointer" }}
              />
            </NavItems>
            <NavItems where="/">
              <BsFillCartFill
                size="1.2em"
                color="#e45574"
                style={{ cursor: "pointer" }}
              />
            </NavItems>
            <NavItems where="/">
              <BsFillHeartFill
                size="1.2em"
                color="#e45574"
                style={{ cursor: "pointer" }}
              />
            </NavItems>
          </ul>
        </div>
      </nav>
    </>
  );
}
