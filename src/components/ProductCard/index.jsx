import React from "react";

import Placeholder from "../Svgs/Placeholder";

export default function ProductCard({ product }) {
  return (
    <div className="card product-card text-center p-1 m-1">
      <div className="overflow-hidden">
        <div className="card-image-top">
          <Placeholder text={product.name} textFontSize="2rem" />
        </div>
      </div>
      <div className="card-body text-dark text-left">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
      </div>
    </div>
  );
}
