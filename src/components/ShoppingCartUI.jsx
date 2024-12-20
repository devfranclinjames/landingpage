import React from "react";
import { useCart } from "./ShoppingCart";
import { useNavigate } from "react-router-dom"; 

const ShoppingCartUI = () => {
  const { cart, editCartItem, deleteFromCart } = useCart();
  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate("/checkout");
  };
  return (
    <div >
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>The cart is empty!</p>
      ) : (
        <>
        <ul>
          {cart.map((item) => (
            <li key={item.id} style={{ marginBottom: "15px" }}>
              <img
                src={item.image}
                alt={item.name}
                style={{ width: "50px", marginRight: "10px" }}
              />
              <strong>{item.name}</strong><br/>
              Size: {item.size}<br/> 
              Color: {item.color}<br/> 
              Price: {item.price} <br/>
              Qty: <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) =>
                  editCartItem(item.id, parseInt(e.target.value, 10))
                }
                style={{ width: "50px", marginRight: "10px" }}
              />
              <button className="btn btn-outline-danger" onClick={() => deleteFromCart(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
        <center><button className="chckout btn btn-dark text-center" onClick={goToCheckout}>Proceed to Checkout</button></center>
        </>
      )}
    </div>
  );
};

export default ShoppingCartUI;
