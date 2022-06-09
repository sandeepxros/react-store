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
  }
  async componentDidMount() {
    await axios.get("https://fakestoreapi.com/products").then((res) => {
      const products = res.data;
      this.setState({ products });
    });
  }
  componentWillUnmount(){
    for(let x in this.state.products)
    localStorage.setItem(x, JSON.stringify(this.state.products[x]));
  }

  render() {
    return (
      <>
        {this.state.products.length === 0 ? (
          <Loading />
        ) : (
          <div className="row py-3">
            {this.state.products.map((product) => (
              <div
                className="col-md-3 col-6 my-3 d-flex align-items-center justify-content-center"
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
