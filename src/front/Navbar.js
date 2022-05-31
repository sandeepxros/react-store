import "./css/Navbar.css";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { ImLeaf } from "react-icons/im";
import { Link } from "react-router-dom";
import Modal from "../helper/Modal";
import { useState } from "react";
import Login from "../users/Login";
export default function Navbar() {
  const [show, setShow] = useState(false); 
  console.log(show);
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top glass">
        <div className="container d-flex flex-inline">
          <Link className="navbar-brand d-flex flex-inline " to="/">
            Leaf{" "}
            <span>
              <ImLeaf color="green" size={"1.5em"} />
            </span>
          </Link>
          <form className="d-flex w-50 mx-auto my-auto  " role="search">
            <div className="input-group">
              <input
                className="form-control "
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-success input-group-text" type="submit">
                Search
              </button>
            </div>
          </form>
          <ul className="nav">
            <li className="nav-item mx-4" onClick={()=>setShow(preSte=>!preSte)}>
              <FaRegUser
                size={"1.2em"}
                color="green"
                style={{ cursor: "pointer" }}
              />
            </li>
           
            <li className="nav-item">
              <FiShoppingCart
                size="1.2em"
                color="green"
                style={{ cursor: "pointer" }}
              />
            </li>
          </ul>
        </div>
      </nav>
      <Modal show={show} onClose={()=>setShow(preSte=>!preSte)}>
        <Login/>
      </Modal>
    </>
  );
}
