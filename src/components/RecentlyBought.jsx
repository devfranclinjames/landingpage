import festive from "../images/festive.jpg";
import chevron from "../images/chevron.jpg";
import manila from "../images/manila.jpg";
import diamante from "../images/diamante.jpg";
import banneth from "../images/banneth.jpg";

import React from 'react'

const RecentlyBought = () => {
  return (
    <>
        <div className="pageContent mw-1440 recently">
            <h1>Recently Bought</h1>
            <div className="allCards">
                <div className="cardlist">
                    <div className="cardItem">
                        <img className="cardItemImage" src={festive} alt="" />
                        <span>Festive Looks Rust Red Ribbed Velvet Long Sleeve Bodysuit</span>
                    </div>
                </div>
                <div className="cardlist">
                    <div className="cardItem">
                        <img className="cardItemImage" src={chevron} alt="" />
                        <span>Chevron Flap Crossbody Bag</span>
                    </div>
                </div>
                <div className="cardlist">
                    <div className="cardItem">
                        <img className="cardItemImage" src={manila} alt="" />
                        <span>Manilla Tan Multi Plaid Oversized Fringe Scarf</span>
                    </div>
                </div>
                <div className="cardlist">
                    <div className="cardItem">
                        <img className="cardItemImage" src={diamante} alt="" />
                        <span>Diamante Puff Sleeve Dress - Black</span>
                    </div>
                </div>
                <div className="cardlist">
                    <div className="cardItem">
                        <img className="cardItemImage" src={banneth} alt="" />
                        <span>Banneth Open Front Formal Dress in Black</span>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default RecentlyBought