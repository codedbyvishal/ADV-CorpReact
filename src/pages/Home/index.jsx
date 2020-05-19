import React, { Component } from "react";
import { connect } from "react-redux";
import _map from "lodash/map";

import { getProducts } from "../../store/actions";

import ProductCard from "../../components/ProductCard";

class Home extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const { cart } = this.props;
    const { data } = this.props.inventory;
    const cartItemsSku = _map(cart.data, "sku");

    return (
      <div className="home-page">
        <div className="row m-4">
          {data.map((product) => (
            <div
              className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3"
              key={product.sku}
            >
              <ProductCard
                product={product}
                isInCart={cartItemsSku.includes(product.sku)}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({ inventory: state.inventory, cart: state.cart }),
  {
    getProducts,
  }
)(Home);
