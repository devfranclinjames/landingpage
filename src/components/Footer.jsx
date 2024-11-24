import r10 from '../images/r10.png';
import r11 from '../images/r11.png';
import r12 from '../images/r12.png';
import r13 from '../images/r13.png';
import r14 from '../images/r14.png';
import ftrLogo  from "../images/Logo.svg"
import arrRight from '../images/arrRight.svg';
import React from 'react';
import {socmedicons} from "./SocialMedia"; 
import {CREDITCARDS} from "./CreditCards"; 
import { useNavigate } from 'react-router-dom';

const instaImages = [
    {image: r10,},{image: r11,},{image: r12,},{image: r13,},{image: r14,}
];

const Footer = () => {
    const navigate2 = useNavigate();

    const handleLogoClick2 = () => {
      navigate2('/landingpage/');
    };
  return (
    <>
        <section className="insta">
            <h1 className="jumboTitle">
                Your Next Inspo
            </h1>
            <p>Checkout who's wearing what by using #THREADEDInspo on Instagram</p>
            {/* cards */}
            <div className="ftrCards">
                <div className="cardWrap">
                    <div className="cardItem">
                        {instaImages.map((item) => (
                            <img src={item.image} alt={item.image} key={item.index} />
                        ))};
                    </div>
                </div>
            </div>
            <div className="btnwrappers"><button className="blackbtn">VIEW ALL POSTS</button></div>
        </section>
        <section className="newsletter">
            <div className="newsletterWrapper">
                <h1>SIGN UP FOR EXCLUSIVE DEALS AND UPDATES</h1>
                <div>
                    <input type="text" value="Your Email Address" />
                    <button className="arrowRight">
                        <img src={arrRight} alt="" />
                    </button>
                </div>
            </div>
        </section>
        <section className="footerEnd">
            <div className="ftrwrapper">
                <div className="ftrSection mw-640">
                    <div className="ftrsect">
                        <b>COMPANY INFO</b>
                        <p>About THREADED</p>
                        <p>Affiliate</p>
                        <p>Blog</p>
                        <p>Careers</p>
                    </div>
                    <div className="ftrsect">
                        <b>HELP & SUPPORT</b>
                        <p>FAQ</p>
                        <p>Shipping</p>
                        <p>Returns</p>
                        <p>How To Order</p>
                        <p>How To Track</p>
                    </div>
                    <div className="ftrsect">
                        <b>CUSTOMER CARE</b>
                        <p>Contact Us</p>
                        <p>Payment Methods</p>
                    </div>
                </div>
                <div className="scmed">
                    <div className="socmedia">
                        <b>Follow Us</b><br />
                        {socmedicons.map((icon) => (
                            <img src={icon.image}/>
                        ))}
                    </div>
                    <div className="ftrCards">
                        <br />
                        <b>WE ACCEPT</b><br />
                        {CREDITCARDS.map((ccs) => (
                            <img src={ccs.image} />
                        ))}
                    </div>
                </div>
                <div className="ftrSection mw-640 lghide">
                    <img className="logo" src={ftrLogo}alt=""/>
                </div>
            </div>
            <div className="belowrrapper">
                <div className="ftrSection ">
                    <p>All Rights Reserved.</p>
                </div>
                <div className="ftrSection ">
                    <img className="logo" src={ftrLogo} onClick={handleLogoClick2} alt=""/>
                </div>
            </div>
        </section>
    </>
  )
}

export default Footer