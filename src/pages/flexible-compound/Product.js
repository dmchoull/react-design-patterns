import React, { Component } from "react";

const ProductContext = React.createContext();

function formatPrice(amount, currency) {
  return `$${amount} ${currency}`;
}

class Product extends Component {
  static Image = () => (
    <ProductContext.Consumer>
      {product => <img src={product.imageURL} alt="" />}
    </ProductContext.Consumer>
  );

  static Name = () => (
    <ProductContext.Consumer>
      {product => <span>{product.name}</span>}
    </ProductContext.Consumer>
  );

  static Price = () => (
    <ProductContext.Consumer>
      {product => <span>{formatPrice(product.price, product.currency)}</span>}
    </ProductContext.Consumer>
  );

  static Description = () => (
    <ProductContext.Consumer>
      {product => <p>{product.description}</p>}
    </ProductContext.Consumer>
  );

  render() {
    return (
      <ProductContext.Provider value={this.props.product}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

export default Product;
