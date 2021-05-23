import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          title: "Watch",
          price: 99,
          qty: 1,
          id: 1,
        },
        {
          title: "Mobile Phone",
          price: 999,
          qty: 10,
          id: 2,
        },
        {
          title: "Lapop",
          price: 4,
          qty: 1,
          id: 3,
        },
      ],
    };
  }
  handleIncreaseQuantity = (product) => {
    console.log("increase th quantity", product);
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;

    this.setState({
      products: products,
    });
  };
  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {/* <CartItem qty={1} price={999} title={"watch"} img={""} />
         */}
        {products.map((product) => {
          return (
            <CartItem
              product={product}
              key={product.id}
              onIncreaseQuantity={this.handleIncreaseQuantity}
            />
          );
        })}
      </div>
    );
  }
}

export default Cart;
