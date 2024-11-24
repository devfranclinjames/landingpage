import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Slider from "./components/Slider";
import HomeContent from "./components/HomeContent";
import RecentlyBought from "./components/RecentlyBought";
import ShoppingCart from "./components/ShoppingCart";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <ShoppingCart>
        <section className="headerSect"><Header /></section>
        <Routes>
          {/* Define the home route */}
          <Route
            path="/"
            element={
              <>
                <section className="sliderSect"><Slider /></section>
                <HomeContent />
                <RecentlyBought />
                <Footer/>
              </>
            }
          />
          {/* Define the checkout route */}
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </ShoppingCart>
    </Router>
  );
}

export default App;
