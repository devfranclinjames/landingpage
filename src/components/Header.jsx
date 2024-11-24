import React, { useState } from "react";
import ShoppingCartUI from "./ShoppingCartUI"; // Ensure the path is correct
import mainLogo from '../images/Logo.svg';
import user from '../images/bx_bx-user.svg';
import bag from '../images/bx_bx-shopping-bag.svg';
import heart from '../images/bx_bx-heart.svg';
import sup from '../images/bx_bx-support.svg';
import search from '../images/bx_bx-search.svg';
import rect from '../images/rectangle2.png';
import flag from '../images/USFlag.svg';
import arrwdwn from '../images/ant-design_down-outlined.png';
import pin from '../images/bx_bx-map-pin.svg';
import crown from '../images/bx_bx-crown.svg';
import star from '../images/bx_bx-star.svg';
import delivery from '../images/mdi_truck-delivery-outline.svg';
import purchase from '../images/bx_bx-purchase-tag.svg';
import cart from '../images/cart.svg';
import { useNavigate } from 'react-router-dom';





const Header = () => {
    const navigate = useNavigate();

    const handleLogoClick = () => {
      navigate('/');
    };
  const [isAccordionOpen, setAccordionOpen] = useState(false);

  const toggleAccordion = () => setAccordionOpen((prev) => !prev);

  return (
    <>
      <header>
        <ul className="onleftLogo">
          <li className="activeNav">WOMEN</li>
          <li>PLUS</li>
          <li>MEN</li>
          <li>ACCESSORIES</li>
        </ul>
        <img className="logo" src={mainLogo} onClick={handleLogoClick} alt=""/>
        <div className="onrightLogo">
          <img className="onrightLogoItems" src={user} alt="" />
          <img className="onrightLogoItems" src={bag} alt="" />
          <img className="onrightLogoItems" src={heart} alt="" />
          <img className="onrightLogoItems" src={sup} alt="" />
          <img className="onrightLogoItems" src={search} alt="" />
          <div className="currency">
            <img src={rect} alt="" />
            <div className="usLogoCurrency">
              <img className="" src={flag} alt="" />
              <span>&nbsp;USD $&nbsp;&nbsp;&nbsp;<img src={arrwdwn} alt="" className="arrowdown" /></span>
            </div>
          </div>
          <button
            className="accordion btn btn-outline-success"
            onClick={toggleAccordion}
          >
            <img className="onrightLogoItems cart" src={cart} alt="Cart" />
          </button>
          {isAccordionOpen && (
            <div className="panel">
              <ShoppingCartUI />
            </div>
          )}
        </div>
      </header>
      <div className="underHeader">
        <div className="uheaderitem">
          <img src={crown} alt="" />
          <span>Exclusive Deals for VIP 2 and up!</span>
        </div>
        <div className="uheaderitem">
          <img src={star} alt="" />
          <span>Weekly New Arrivals</span>
        </div>
        <div className="uheaderitem">
          <img src={delivery} alt="" />
          <span>Free Shipping On Orders Over $100</span>
        </div>
        <div className="uheaderitem">
          <img src={pin} alt="" />
          <span>Track Your Order</span>
        </div>
        <div className="uheaderitem">
          <img src={purchase} alt="" />
          <span>10% Off On Your First Order!</span>
        </div>
      </div>
    </>
  );
};

export default Header;
