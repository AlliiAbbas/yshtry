import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import '../../Styles/Offers/offers.css'
export default class Offers extends Component {
  render(){
  return (
    <div className='offers'>
      <div className='offersLinks'>
      <nav>
        <NavLink to="/men" >Men</NavLink>
        <span>/</span>
        <NavLink to="/offer/clothing" >Clothing</NavLink>
        <span>/</span>
        <NavLink to="/offer/tops" >Tops</NavLink>
        <span>/</span>
        <NavLink to="/offer/adidas" >Adidas</NavLink>
        <span>/</span>
        <NavLink to="/offer/adidasblacktshirt" >AdidasBlackTshirt</NavLink>

      </nav>
      </div>
      
      
    </div>
  )}
}
