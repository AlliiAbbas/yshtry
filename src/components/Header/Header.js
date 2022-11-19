
import React, { Component } from 'react'
import '../../Styles/Header/header.css'
import Bottom from './Bottom'
import Center from './Center'
import Top from './Top'
class Header extends Component {
    
  constructor(props){
    super(props);
    this.state ={
      product:[]
    }
  }
  render(){
    return (
      <div className='header'>
        <Top />
        <Center data={this.props.data} />
        <Bottom />
      </div>
    )
  }
}
  export default Header

