import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../front/Navbar";
import Loading from "./Loading";
import ProductDetails from "./ProductDetails";
import Front from "../front/Front";
import Error404 from "../helper/Error404";
import axios from "axios"; 
import Products from "./Products";
import Footer from "../footer/Footer";

export default function ProductPage(props) {
  const param = useParams();
  const [producs, setProduct] = useState(null);
  const [err, setError] = useState(false);

  const fetchData = () => {
      console.log("Current param: "+param.pid);
      setProduct(JSON.parse(localStorage.getItem(param.pid)));
      console.log("current data: "); 
      console.log(producs);  
      console.log(localStorage.getItem(param.pid)); 
  };
  useEffect(fetchData,param.pid); 

  
  if(err)
  return <Error404/>

  return !producs ? (
    <Loading />
  ) : (
    <>
      <Navbar />
      <div className="container bg-light  d-flex justify-content-center align-items-center">
        <div className="row py-3">
          <div className="col-md-6 justify-content-center align-items-center">
            <div className=" p-1 mb-4 overflow-hidden d-flex justify-content-center align-items-center">
              <img
                src={producs.image}
                className="img-fluid img-container rounded-3 "
                height={"400px"}
                width={"400px"}
                alt=""
              />
            </div>
          </div>
          <div className="col-md-6">
            <ProductDetails
              title={producs.title}
              rating={producs.rating}
              price={producs.price}
              description={producs.description}
            />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
