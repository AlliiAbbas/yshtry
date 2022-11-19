import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../Group 769@2x.png'
import bars from '../../Group 770.png'
import leftArrow from '../../Path 797.png'
import rightArrow from '../../Path 796.png'
import phone from '../../Group 756.png'
import bag from '../../Group 758.png'
import location from '../../Group 753.png'

 const Top=()=> {
  return (
    <div className='headerTop'>
        <div className='topComponent'>
            <div className='topLeft'>
                <img src={bars} alt=""  className='bars'/>
                <img src={logo} alt="" className='logo' />
            </div>
            <div className='topCenter'>
                <img src={leftArrow} alt=""  className='arrowLeft'/>
                <span>Valentine's Day offers! Buy Tow Get One Free <NavLink to="" >Shop Now</NavLink>  </span>
                <img src={rightArrow} alt="" className='arrowRight' />
            </div>
            <div className='topRight'>
                <label><img src={phone} className='rightIcon' alt="" /> Contact Us</label>
                <label><img src={bag} className='rightIcon' alt="" /> Track Order</label>
                <label><img src={location} className='rightIcon' alt="" /> Find A Store</label>
            </div>
        </div>
        </div>
  )
}
export default Top