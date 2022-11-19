import React from 'react'
import '../../Styles/notFound/notFound.css'
import { Link } from 'react-router-dom';
import NotFounds from '../../Group 769@2x.png'

 const NotFound = () => 
 
 {
    
  return (
    
    <div className='notFound'>
        <h1>404 Page Not Found Or Under Development</h1>
        <img src={NotFounds} alt="" />
        <Link to="/yshtry" >BackHome</Link>
        
    </div>
  )
}
export default NotFound