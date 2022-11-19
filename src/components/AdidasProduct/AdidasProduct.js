import React, { Component } from 'react'

import Header from '../Header/Header'
import '../../Styles/AdidasProduct/adidasProduct.css'
import Footer from '../Footer/Footer'
import AdidasBlackTshirt from '../OffersPages/AdidasBlackTshirt'

 class AdidasProduct extends Component {
  constructor(props){
    super(props);
    this.state ={
      product:[]
    }
  }
  

  getData=(product)=>{
    this.setState({product})
    
  }
  render(){
    return (
      <div className='adidasProduct'>
        <Header data={this.state.product}/>
        
        <AdidasBlackTshirt date={{getData : this.getData.bind(this)}} />
        
        <Footer />
      </div>
    )
  }
 }
export default AdidasProduct