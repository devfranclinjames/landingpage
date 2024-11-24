import winterFashion from "../images/winterFashion.jpg"
import party from "../images/party.jpg"
import sweater from "../images/sweater.jpg"
import whitedress from "../images/whitedress.jpg"
import outerwear from "../images/outerwear.jpg"
import holidays from "../images/holidays.jpg" 
import nightout from "../images/nightout.jpg" 
import boots from "../images/boots.jpg" 
import goldbg from "../images/goldbg.jpg" 
import React from 'react'

const HomeContent = () => {
  return (
    <>
        <section className="siteWide">
            <div className="siteWideItem">
                $5 <span>OFF</span>
                <div className="siteWideItemDetail">
                    on orders above $50
                </div>
            </div>
            <div className="siteWideItem">
                $15 <span>OFF</span>
                <div className="siteWideItemDetail">
                    on orders above $75
                </div>
            </div>
            <div className="siteWideItem">
                $20 <span>OFF</span>
                <div className="siteWideItemDetail">
                    on orders above $150
                </div>
            </div>
            <div className="siteWideItem">
                $30 <span>OFF</span>
                <div className="siteWideItemDetail">
                    on orders above $200
                </div>
            </div>
            <div className="siteWideItem">
                <button className='blackbtn'>CHECK OUT ALL SITE-WIDE DEALS</button>
            </div>
        </section>
        <section className="blackFriday">
            <div className="blockset a">
                <span>BLACK FRIDAY EXCLUSIVE</span>
            </div>
            <div className="blockset b">
                <span>FREE SHIPPING ON ALL ORDERS FOR VIP 2 AND UP!</span>
            </div>
            <div className="blockset c">
                <button>SHOP NOW</button>
            </div>
        </section>
        <section className="pageContent container">
            <h1>Now Trending</h1>
            <br />
            <span>See what everyone's wearing right now</span>
            
            {/* cards */}
            <div className="allCards">
                <div className="cardlist">
                    <div className="cardItem">
                        <img className="cardItemImage" src={winterFashion} alt="" />
                        <span>WINTER FASHION</span>
                    </div>
                </div>
                <div className="cardlist">
                    <div className="cardItem">
                        <img className="cardItemImage" src={boots} alt="" />
                        <span>BOOTS</span>
                    </div>
                </div>
                <div className="cardlist">
                    <div className="cardItem">
                        <img className="cardItemImage" src={nightout} alt="" />
                        <span>NIGHT OUT</span>
                    </div>
                </div>
                <div className="cardlist">
                    <div className="cardItem">
                        <img className="cardItemImage" src={holidays} alt="" />
                        <span>HOLIDAYS</span>
                    </div>
                </div>
                <div className="cardlist">
                    <div className="cardItem">
                        <img className="cardItemImage" src={outerwear} alt="" />
                        <span>OUTERWEAR</span>
                    </div>
                </div>
                <div className="cardlist">
                    <div className="cardItem">
                        <img className="cardItemImage" src={whitedress} alt="" />
                        <span>WHITE DRESS</span>
                    </div>
                </div>
                <div className="cardlist">
                    <div className="cardItem">
                        <img className="cardItemImage" src={sweater} alt="" />
                        <span>SWEATERS</span>
                    </div>
                </div>
                <div className="cardlist">
                    <div className="cardItem">
                        <img className="cardItemImage" src={party} alt="" />
                        <span>PARTY</span>
                    </div>
                </div>
            </div>

            {/* hashtags */}
            <div className="hashtagslist">
                <div className="hashtagItem btnize">#Thanksgiving</div>
                <div className="hashtagItem btnize">#NewYears</div>
                <div className="hashtagItem btnize">#Knitted</div>
                <div className="hashtagItem btnize">#Pajamas</div>
                <div className="hashtagItem btnize">#WFH</div>
                <div className="hashtagItem btnize">#FallFashion</div>
            </div>

            {/* New */}
        </section>
        <div className="newsCard">
            <img src={goldbg} className="cardimagemerge bg" alt="" />
            <div className="newsContent">
                <h1>NEW ARRIVALS</h1>
                <span>Get ready for the holidays with us!</span>
                <button>SHOP NOW</button>
            </div>
        </div>
    </>
  )
}

export default HomeContent;