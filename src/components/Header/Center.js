import React, { Component } from 'react'
import logo from '../../Group 745@2x.png'
import bag from '../../Path 772.png';
import search from '../../Path 774.png'
import wishlist from '../../Path 771.png'
import login from '../../Path 773.png'
import img1 from '../../Group 1441.png'
import x from '../../Group 1440.png'
 class Center extends Component  {
    constructor(props){
        super(props);
        this.state ={
            cart : true,
            totalPrice :0,
           
            
        }
      }
      componentDidUpdate(){
        
      }
    openCart=()=>{
        if(this.state.cart=== true){
            this.setState({
                cart : false
            })
        }
        this.setState({
            product:[...this.props.data]
        })
            let price =0;
            let quantity =0 ;
            let totalPrice=0 ;
        for (let i = 0; i<=this.props.data.length-1;i++ ){
            
            
            price=parseInt(this.props.data[0].price);
            
            quantity=quantity+parseInt(this.props.data[i].quntity); 
            
            totalPrice= price*quantity ;
           
 
            this.setState({
                totalPrice
            })
          
            

        }
        
        
    }
    closeCart=()=>{
        if(this.state.cart===false){
            this.setState({
                cart : true
            })
        }
        
    }
   
    render(){
  return (
    <div className='headerCenter'>
        <div className='centerComponent'>
            <div className='search'>
            <img src={search} alt='' className='searchImg' />
            <input type={'text'} placeholder="Search" />
            </div>
            <div className='logoCenter'>
                <img src={logo} alt=""/>
            </div>
            <div className='centerRight'>
                <label onClick={this.openCart}><img src={bag} alt=""   className='bag'  /> Cart<p>{this.props.data.length}</p></label>
                <label><img src={wishlist} alt=''  className='list' />Wishlist</label>
                <label> <img src={login} alt=''  className='login' /> Login</label>
            </div>
            
        </div>
        <div className={this.state.cart ? 'floatClose' : 'floatOpen'}>
                <div className='cardWhite'>
                <div className='myCart' ><span>My Cart</span></div>
                <div className='summary'><p >Cart Summary</p></div>
                
                {this.props.data.map((product)=> <div className='slecetedCard' key={Math.random()}>
                    <div className='img'><img src={img1} alt="" /></div>
                    <div className='info'>
                        <p>{product.name}</p>
                        <span>Quantity: <label>{product.quntity}</label></span>
                        <h2>{parseInt(product.price)*parseInt(product.quntity)} LE</h2>
                    </div>
                    <button className='remove'>Remove</button>
                </div>)}
                <div className='total'><h3>Total : <span>{this.state.totalPrice} LE</span></h3></div>
                <div className='buttons'><button className='review'>Review Cart</button> <button className='Comp'>Compelete Checkout</button></div>
                <img src={x} className='X' alt='' onClick={this.closeCart} />
                </div>

            </div>
    </div>
  )
}
 }
export default Center