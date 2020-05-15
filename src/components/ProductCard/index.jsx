import React, { Component } from "react";
import { connect } from "react-redux";

import Placeholder from "../Svgs/Placeholder";
import Colors from "../Colors";
import Sizes from "../Sizes";
import Prices from "../Prices";

import { addToCart } from "../../store/actions";

class ProductCard extends Component {
  addToCart = (event) => {
    event.preventDefault();

    this.props.addToCart({
      sku: event.currentTarget.getAttribute("data-sku"),
    });
  };

  removeFromCart = (event) => {
    event.preventDefault();

    this.props.removeFromCart({
      sku: event.currentTarget.getAttribute("data-sku"),
    });
  };

  render() {
    const { product } = this.props;

    return (
      <div className="card product-card text-center p-1 m-1">
        <div className="overflow-hidden">
          <div className="card-image-top">
            <Placeholder text={product.name} textFontSize="2rem" />
          </div>
        </div>
        <div className="card-body text-dark text-left">
          <h5 className="card-title">{product.name}</h5>
          <div className="row">
            <div className="col-3">Colors: </div>
            <div className="col-9">
              <Colors colors={product.colors} />
            </div>
          </div>
          <div className="row">
            <div className="col-3">Sizes: </div>
            <div className="col-9">
              <Sizes sizes={product.sizes} />
            </div>
          </div>
          <div className="row">
            <Prices price={product.price} salePrice={product.salePrice} />
          </div>
          <p className="card-text">{product.description}</p>
          <div className="row actions">
            <button
              onClick={this.addToCart}
              data-sku={product.sku}
              className="btn btn-primary col-5 mx-2"
            >
              Add To Cart
            </button>
            {/** TODO: Show only if this product is there in the cart */}
            <button
              onClick={this.removeFromCart}
              data-sku={product.sku}
              className="btn btn-primary  col-5 mx-2"
            >
              Remove From Cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect((state) => state, { addToCart })(ProductCard);
