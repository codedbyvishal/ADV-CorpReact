import React, { Component } from "react";
import { connect } from "react-redux";

import { getProducts } from "../../store/actions";

import ProductCard from "../../components/ProductCard";

class Home extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const { data } = this.props.inventory;

    return (
      <div className="home-page">
        <div className="row m-4">
          {data.map((product) => (
            <div
              className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3"
              key={product.sku}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default connect((state) => ({ inventory: state.inventory }), {
  getProducts,
})(Home);
