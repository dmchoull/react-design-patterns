import React from "react";
import Product from "./Product";
import FavouriteButton from "./FavouriteButton";
import OutboundLink from "./OutboundLink";
import "./index.css";

const product = {
  name: "Product 1",
  imageURL: "https://via.placeholder.com/300x300",
  price: 199.99,
  currency: "CAD",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus delectus dolorum, " +
    "ea, facere illo inventore, labore laboriosam perferendis quas quasi recusandae sit sunt." +
    " Aspernatur libero repudiandae vero vitae voluptate."
};

function FlexibleCompoundComponents() {
  return (
    <div className="product-container">
      <Product product={product}>
        <Product.Image />

        <div className="product-section">
          <Product.Name />
          <Product.Price />
        </div>

        <Product.Description />

        <div className="product-section">
          <OutboundLink url="https://www.example.com" />
          <FavouriteButton />
        </div>
      </Product>
    </div>
  );
}

export default FlexibleCompoundComponents;
