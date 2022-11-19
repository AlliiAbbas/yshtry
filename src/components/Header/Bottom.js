import React from 'react'
import { NavLink} from 'react-router-dom'

const  Bottom =()=> {
  return (
    <div className='headerBottom'>
        <div>
            <nav>
            <NavLink to="men" >Men</NavLink>
            <NavLink to="women" >Women</NavLink>
            <NavLink to="unisex" >Unisex</NavLink>
            <NavLink to="kids" >Kids</NavLink>
            <NavLink to="bestsallers" >Best Sallers</NavLink>
            <NavLink to="newarrivals" >New Arrivals</NavLink>
            <NavLink to="offer" >Offer</NavLink>

            </nav>
        </div>
        
    </div>
  )
}
export  default Bottom