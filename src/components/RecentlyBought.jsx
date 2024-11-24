import festive from "../images/festive.jpg"; 
import chevron from "../images/chevron.jpg";
import manila from "../images/manila.jpg";
import diamante from "../images/diamante.jpg";
import banneth from "../images/banneth.jpg";
import React from "react";
import { useCart } from "./ShoppingCart";

const RecentlyBought = () => {
  const { addToCart } = useCart();

  // sample data
  const recentPurchases = [
    {
      id: 1,
      name: "Festive Looks Rust Red Ribbed Velvet Long Sleeve Bodysuit",
      image: festive,
      price: 38,
      discounted: "",
      color: "Rust Red",
      size: "Medium",
      demand: "In Demand! Sold 21 times in the last 18hours",
      stylenum: "ELLI-WD2544",
    },
    {
      id: 2,
      name: "Chevron Flap Crossbody Bag",
      image: chevron,
      price: 5.77,
      discounted: 7.34,
      color: "Black",
      size: "",
      demand: "DONT MISS OUT!! Sold 77 times in the last 24hours",
      stylenum: "ELLI-WD3514",
    },
    {
      id: 3,
      name: "Manilla Tan Multi Plaid Oversized Fringe Scarf",
      image: manila,
      price: 29,
      discounted: 39,
      color: "Multi-color",
      size: "Medium",
      demand: "DONT MISS OUT! Sold 34 times in the last 19hours",
      stylenum: "ELLI-WD1342",
    },
    {
      id: 4,
      name: "Diamante Puff Sleeve Dress - Black",
      image: diamante,
      price: 45.99,
      discounted: "",
      color: "Black",
      size: "Small",
      demand: "In Demand! Sold 55 times in the last 48hours",
      stylenum: "ELLI-WD3044",
    },
    {
      id: 5,
      name: "Banneth Open Front Formal Dress in Black",
      image: banneth,
      price: 69,
      discounted: 99.95,
      color: "Black",
      size: "Large",
      demand: "In Demand! Sold 32 times in the last 48hours",
      stylenum: "ELLI-WD344",
    },
  ];

  return (
    <div className="pageContent mw-1440 recently">
      <h1>Recently Bought</h1>
      <div className="allCards">
        <div style={{ display: "flex", gap: "20px" }}>
          {recentPurchases.map((item) => (
            <div className="cardlist" key={item.id}>
              <div className="cardItem">
                <img
                  className="cardItemImage"
                  src={item.image}
                  alt={item.name}
                  style={{ width: "150px" }}
                />
                <span>{item.name}</span>
            </div>
                <div className="cardPricing">
                    <span className="price discounted">${item.price}</span>
                    <span className="slashedPrice">${item.discounted}</span>
                </div>
                <div className="buyAgain">
                  <button
                    className="btn btn-success"
                    onClick={() => addToCart(item)}
                  >
                    Buy Again
                  </button>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentlyBought;
