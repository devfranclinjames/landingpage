import React from "react";
import bag from "../images/bx_bx-shopping-bag.svg"
import { useCart } from "./ShoppingCart";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    // Simulate order submission
    alert("Order placed successfully!");
    navigate("/"); // Redirect to home after submission
  };

  // Calculate total amount considering price * quantity for each item
  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.discounted || item.price); // Ensure price is a number
      const quantity = parseInt(item.quantity, 10); // Ensure quantity is a number
      if (!isNaN(price) && !isNaN(quantity)) {
        return total + price * quantity;
      } else {
        console.error(`Invalid data for item:`, item);
        return total;
      }
    }, 0).toFixed(2); // Ensure the total is rounded to two decimal places
  };

  const subtotal = calculateTotal(); // Calculate subtotal

  return (
    <div className="container checkout">
      <h1>Shopping Bag</h1>
      <p>Sign in to sync your bag across your devices.</p>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <>
          <div className="shoppingbag">
          <div className="flexone">
            <ul>
              {cart.map((item) => (
                <li key={item.id} style={{ marginBottom: "10px" }}>
                  <div className="checkoutItem">
                    <div className="checkoutItemDetail">
                      <img src={item.image} alt={item.name} />
                      <img src={bag} alt="" /> {item.demand}
                      <strong>{item.name} <br /></strong>
                      Quantity: {item.quantity} <br />
                      Style No: {item.stylenum}
                    </div>
                    <div className="checkoutItemPrice">
                    ${item.price}<br/>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            </div>
            
          <div className="smmary-outer">
          <center><strong>Order Summary</strong></center>
            
          <div className="summary">
          
              <div className="summary-inner">
                <div>
                  Subtotal: 
                  <br />
                  Free Shipping!<br />
                  <b>Estimated Total: </b>
                </div>
                <div>
                  ${subtotal} {/* Display the correct subtotal */}
                  <br />
                  $0.00<br />
                  <b>${subtotal} </b>{/* Display the same total as subtotal */}
                </div>
              </div>
              <center className="vat"><span>VAT included*</span></center>
            </div>
            <center className="blackcheckout">
              <div className="blackbtn btn1"><button>Checkout as a Guest</button></div>
              <div className="blackbtn btn2"><button>Sign In for faster Checkout</button></div>
            </center>
          </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Checkout;
