import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import Checkout from "../checkout/Checkout";

export default function ProductDetails(props) {
  const { title, rating, price, description } = props;

  return (
    <>
      <div className=" ">
        <div className="container-fluid ">
          <h5 className="display-5 fw-bold">{title}</h5>
          <p>
            {rating.rate} , Rates: {rating.count}
          </p>
          <p>${price}</p>
          <button className="btn btn-dark me-3" type="button">
            <Link to="/checkout">Buy Now</Link></button>
          <button className="btn btn-outline-dark" type="button">Add To cart</button>
          <p className="col-md-8 fs-5">{description}</p>
        </div>
      </div>
    </>
  );
}
