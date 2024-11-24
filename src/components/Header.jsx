import mainLogo from '../images/Logo.svg'
import user from '../images/bx_bx-user.svg'
import bag from '../images/bx_bx-shopping-bag.svg'
import heart from '../images/bx_bx-heart.svg'
import sup from '../images/bx_bx-support.svg'
import search from '../images/bx_bx-search.svg'
import rect from '../images/rectangle2.png'
import flag from '../images/USFlag.svg'
import arrwdwn from '../images/ant-design_down-outlined.png'

import React from 'react'

const Header = () => {
  return (
    <>
        <header>
            <ul className='onleftLogo'>
                <li className="activeNav">WOMEN</li>
                <li>PLUS</li>
                <li >MEN</li>
                <li>ACCESSORIES</li>
            </ul>
            <img className="logo" src={mainLogo} alt="" />
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
            </div>
        </header>
    </>
  )
}

export default Header