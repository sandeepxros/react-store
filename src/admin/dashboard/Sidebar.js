import "./Dashboard.css";
import {
  AiOutlineHome,
  AiOutlineFile,
  AiOutlineShoppingCart,
  AiOutlineBarChart,
  AiOutlineComment
} from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import {BiSupport} from "react-icons/bi"; 

export default function Sidebar() {
  return (
    <>
      <nav class="col-md-3 col-lg-2 d-md-block bg-light sidebar ">
        <div className="position-sticky pt-3">
          <ul class="nav flex-column">
            <NavItems>
              <AiOutlineHome
                className="align-text-bottom feather"
                style={feather}
                size={feather.size}
                aria-current="page"
                href="#"
              />
              Dashboard
            </NavItems>

            <NavItems>
              <AiOutlineFile
                className="align-text-bottom feather"
                style={feather}
                size={feather.size}
              />
              Orders
            </NavItems>

            <NavItems>
              <AiOutlineShoppingCart
                className="align-text-bottom feather"
                style={feather}
                size={feather.size}
              />
              Products
            </NavItems>

            <NavItems>
              <BsPeople
                className="align-text-bottom"
                style={feather}
                size={feather.size}
              />
              Customers
            </NavItems>

            <NavItems>
              <AiOutlineBarChart
                className="align-text-bottom feather"
                size={feather.size}
                style={feather}
              />
              Reports
            </NavItems>

            <NavItems>
              <BiSupport
                className="align-text-bottom feather"
                size={feather.size}
                style={feather}
              />
              Customer Support
            </NavItems>

            <NavItems>
              <AiOutlineComment
                className="align-text-bottom feather"
                size={feather.size}
                style={feather}
              />
              Customer Questions
            </NavItems>
           
          </ul>
        </div>
      </nav>
    </>
  );
}

const NavItems = (props) => {
  return (
    <li class="nav-item border-bottom">
      <a class="nav-link">{props.children}</a>
    </li>
  );
};

const feather = {
  size: "1.2em",
  color: "green",
  padding: "0px",
};


//implement realtime chat via socket.io