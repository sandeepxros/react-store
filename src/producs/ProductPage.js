import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../front/Navbar";
import Loading from "./Loading";
import ProductDetails from "./ProductDetails";
export default function ProductPage(props) {
  const param = useParams();
  const [producs, setProduct] = useState(null);
  console.log("From product page comp:  " + param.pid);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + param.pid)
      .then((res) => res.json())
      .then((json) => setProduct(json))
      .catch((err) => alert("unable to load " + err));
  }, []);


  return (
   !producs?<Loading/>:(
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
      </>
    )
  );
}
