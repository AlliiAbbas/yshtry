import React from 'react'
import yshtry from '../../Group 1436.png'
import arrowIn from '../../Group 1431.png'
import facebook from '../../Group 1432.png'
import linkedin from '../../Group 1435.png'
import insta from '../../Group 1433.png'
import twit from '../../Group 1434.png'
import cash from '../../Rectangle 586.png'
import visa from '../../Group 1437.png'
import master from '../../Group 1438.png'
import navnas from '../../Group 1439.png'
import'../../Styles/Footer/footer.css'
 
 const Footer=()=> {
    
  return (
    <div className='footer'>
        <div className='footerContent'>
        <div className='footerTop'>
            <div className='topLeft'>
                <img src={yshtry} alt='' />
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                     sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wisi enim ad minim veniam, 
                      quis nostrud exerci tation ullamcorper suscipit lobortis nisl 
                      ut aliquip ex ea commodo consequat. Duis autem vel eum iriure
                       dolor in hendrerit in vulputate velit esse molestie consequat, 
                       vel illum dolore eu feugiat nulla. Lorem ipsum dolor sit amet, 
                       consectetuer adipiscing elit, sed dia m nonummy nibh euismod 
                       tincidunt ut laoreet dolore magna </p>
            </div>
            <div className='topRight'>
                <div className='rightContent'>
                    <h4>Subscribe to our newsletter</h4>
                    <div className='sub'><input type={'text'} placeholder="Enter Your Mail"/><button className="buttom">Subscribe<img src={arrowIn} alt='' /></button> </div>
                </div>
                <div className='details'>
                    <div className='aboutUs'>  
                        <p>About Us</p>
                        <p>Contact Us</p>
                        <p>Track Order</p>
                        <p>Terms & Conditions</p>
                        <p>Privacy Policy</p>
                        <p>Sell With Us</p>
                        <p>Shipping And Returns</p> 
                    </div>
                    <div className='logos'>
                        <div><img src={facebook} alt='' /> <span> /YESHTERY</span></div>
                        <div><img src={linkedin} alt='' /> <span> /YESHTERY</span></div>
                        <div><img src={insta} alt='' /> <span> /YESHTERY</span></div>
                        <div><img src={twit} alt='' /> <span> /YESHTERY</span></div>

                    </div>
                </div>
            </div>
        </div>
        <div className='footerFooter'>
        <div className='left'><p>© 2021 yeshtery, all rights reserved.</p></div>
        <div className='center'><img src={cash} alt="" /><img src={visa} alt="" /><img src={master} alt="" /></div>
        <div className='right'>
            <p>Powered By</p> <img src={navnas} alt="" />
        </div>
        </div>
    </div>
    </div>
  )
    
}
export default Footer