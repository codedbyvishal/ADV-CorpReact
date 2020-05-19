import React from "react";

export default function Sizes({ sizes }) {
  return (
    <>
      {sizes.map((size, index) => {
        return (
          <div className="size-container" key={index}>
            <div className="size-swatch" key={index}>
              <div className="size-swatch-outer">
                <div className="size-swatch-inner">{size.short}</div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
