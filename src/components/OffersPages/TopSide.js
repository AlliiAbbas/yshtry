import React, { Component } from 'react'
import adidas1 from '../../Group 335@2x.png'
import leftArrow from '../../Path 347@2x.png'
import adidas2 from '../../Group 335@2x.png'
import adidas3 from '../../Group 333@2x.png'
import adidas4 from '../../Group 331@2x.png'
import adidas5 from '../../Group 329@2x.png'
import arrowRight from '../../Path 346@2x.png'
import angleImg from '../../Group 338.png'
import logoAdidas from '../../Group 346.png'
import colorOne from '../../Group 354.png'
import colorTwo from '../../Group 356.png'
import mins from '../../Path 364.png'
import plus from '../../Path 363.png'
import star from '../../Path 368.png'
import noStar from '../../Path 369.png'

class TopSide extends Component  {
    constructor(props){
        super(props);
        this.state={
            counter: 1,
            photoName:adidas1,
            product:[{
               
            }]
            ,
            products :[]
        }
    }

     api= async()=> {
        await fetch('https://dummyjson.com/products/1').then(res => res.json())
        .then(json => {
            this.setState({
            
             product : [{
                name: json.description,
                price : json.price,
                
             }]
           
        
    })
        }
        
    )
    
    }
    
    componentDidMount(){
        this.api();    
        


    
    }
     handlMin = () =>{
        if(this.state.counter>1){
          this.setState({
            counter : this.state.counter-1
          })
        }
    }
    handlMax = () =>{
        if(this.state.counter<=19){
        this.setState({
            counter : this.state.counter+1
        })
        
    }
}
handlChangePic =(e) => {
    this.setState({
        photoName : e.target.src
    })

}
    handlSubmit=(e)=>{
    e.preventDefault();
    let name = document.getElementById("productName").innerHTML;
     let price = document.getElementById("productPrice").innerHTML;
     let quntity = document.getElementById("quntity").innerHTML; 
    
     let productx = [{name,price,quntity}];
     
     let products =[...this.state.products , ...productx]
     

     this.setState({
        products 


     })  

     this.props.date.getData(products)
   
    }
    render(){
  return (
    <div className='topSide' >
    <div className='productImgs'>
        <div className='imgTop'>
           
            <div > <img src={this.state.photoName} alt='' className='productImg'/>    <div className='img360'><img src={angleImg}  alt='' className='angleImg'/>  </div></div>
        </div>
        <div className='imgBottm'>
        <img src={leftArrow} className="sliderArrow" alt=''/>
        <img src={adidas2} className="sliderImg" id='adidas2' alt=''onClick={this.handlChangePic} loading={'lazy'} />
        <img src={adidas3} className="sliderImg" id='adidas3' alt=''onClick={this.handlChangePic}loading={'lazy'}/>
        <img src={adidas4} className="sliderImg" id='adidas4'  alt='' onClick={this.handlChangePic}loading={'lazy'}/>
        <img src={adidas5} className="sliderImg" id='adidas5' alt='' onClick={this.handlChangePic}loading={'lazy'}/>
        <img src={arrowRight} className="sliderArrow" alt=''/>
        
        </div>
    </div>
    <div className='productInfo'>
        <div className='infoOne'>
            <div className='name'>
            <img src={logoAdidas} alt='' />
            <h3 id='productName'>{this.state.product[0].name}</h3>
            <p>Men</p>
            </div>
            <div className='rate'>
                <div><img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" /><img src={noStar} alt="" /></div>
                <span>4.9 of 5</span>
                <p>22 Rates</p>
            </div>
            <div className='price'>
                <h2 id='productPrice'>{this.state.product[0].price} LE</h2>
                <s>{this.state.product[0].price +(this.state.product[0].price * .3)} LE</s>
                <div className='offer'><span>30% Off</span></div>
            </div>
        </div>
        <form>
        <div className='sizes'>
            <h2>Size</h2>
            
            <div className='selectSize'>
                
            <label ><input type={'radio'} name ="size" id='small' required  defaultChecked/><p>Small</p></label>
            <label ><input type={'radio'} name ="size" id='Medium' required /><p>Medium</p></label>
            <label><input type={'radio'} name ="size" id='Large' required /><p>Large</p></label>
            <label><input type={'radio'} name ="size"  id='X Large' required  /><p>X Large</p></label>
            <label><input type={'radio'} name ="size" id='XX Large' required  /><p>XX Large</p></label>
            </div>
        </div>
        <div className='colors'>
              <h2>Colors</h2>
            <div className='selectColor'>
            
            <label><input type={'radio'} name ="color" id='red'  /><img src={colorTwo} alt='' className='imge' /></label>
            <label><input type={'radio'} name ="color" id='black'defaultChecked /><img src={colorOne} alt='' className='imge' /></label>
            
            </div>
            
        </div>
        
        <div className='quantity'>
            <h2>Quantity</h2>
            <div className='counter'><span className='min' onClick={this.handlMin} ><img src ={mins} alt='' /></span> <p id="quntity" onChange={(e)=> this.setState({ counter :e.target.innerHTML})}>{this.state.counter}</p> <span className='max' onClick={this.handlMax}><img src ={plus} alt='' /></span></div>
            <div className='buttons'>
            <input className='cart' type={'submit'} value="Add To Card" onClick={this.handlSubmit}/>
            <button className='store'>Pickup From Store</button>
            
            </div>
            
        </div>
        </form>
    </div>
    </div>
  )
    }
}
export default TopSide ;