import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          title: "Watch",
          price: 99,
          qty: 1,
          img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
          id: 1,
        },
        {
          title: "Mobile Phone",
          price: 999,
          qty: 10,
          img: "https://images.unsplash.com/photo-1580910051074-3eb694886505?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80",
          id: 2,
        },
        {
          title: "Lapop",
          price: 9999,
          qty: 1,
          img: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
          id: 3,
        },
      ],
    };
  }
  handleIncreaseQuantity = (product) => {
    // console.log("increase th quantity", product);
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;

    this.setState({
      products: products,
    });
  };
  handleDecreaseQuantity = (product) => {
    if (product.qty === 0) return;
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty -= 1;

    this.setState({
      products,
    });
  };
  handleDeleteProduct = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id);
    // console.log(items);
    this.setState({
      products: items,
    });
  };
  getCartCount = () => {
    const { products } = this.state;

    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    });

    return count;
  };
  getCartTotal = () => {
    const { products } = this.state;
    let cartTotal = 0;
    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price;
    });
    return cartTotal;
  };
  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={{ padding: 10, fontSize: 20 }}>
          Total:{this.getCartTotal()}
        </div>
      </div>
    );
  }
}

export default App;
