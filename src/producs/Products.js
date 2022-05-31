import React from "react";
import axios from "axios";
import Card from "../helper/Card";
import Loading from "./Loading";
export default class Product extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
    console.log(this.state.products.length == 0);
  }
  async componentDidMount() {
    await axios.get("https://fakestoreapi.com/products").then((res) => {
      const products = res.data;
      this.setState({ products });
    });
  }

  render() {
    return (
      <>
        {this.state.products.length == 0 ? (
          <Loading />
        ) : (
          <div className="row py-3">
            {this.state.products.map((product) => (
              <div
                className="col-md-3 my-3 d-flex align-items-center justify-content-center"
                key={product.id}
              >
                <Card
                  all={product}
                  imgsrc={product.image}
                  title={product.title}
                  text=""
                  key={product.id}
                />
              </div>
            ))}
          </div>
        )}
      </>
    );
  }
}
