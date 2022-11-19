import React, { Component } from 'react'
import '../../Styles/AdidasBT/AdidasBT.css'
import Offers from '../AdidasModels/Offer';
import BottomSide from './BottomSide'
import TopSide  from './TopSide'


 class AdidasBlackTshirt extends Component {
  
  

  getData=(product)=>{
    
    this.props.date.getData(product)

  }

    render(){
  return (
    <div className='adidasBlackT'>
            <Offers />
            <TopSide date={{getData : this.getData.bind(this)}} />
            <BottomSide />
             
    </div>
  )
}
 }

export default AdidasBlackTshirt