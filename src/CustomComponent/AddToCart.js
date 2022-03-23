import React, {Component} from 'react'
import AddToCartStyle from '../CustomComponentStyle/AddToCartStyle.css'
import  MinosIcon from '../icons/icon-minus.svg'
import PlusIcon from '../icons/icon-plus.svg'
import CartIcon from '../icons/icon-cart-copy.svg'


class  AddToCart  extends Component {
    constructor () {
        super ();
        this.state=  {
            discountPrice:125.00,
            actualPrice: 250.00,
            actualPriceBase: 250.00,
            discountPercent:50,
            quantity:1,            
            //this represent the number of cart items that are stored in the session local storage
        }

        this.onPlusClick= this.onPlusClick.bind(this);
        this.onMinusClick =this.onMinusClick.bind(this);
        this.onAddToCartClicked = this.onAddToCartClicked.bind(this);
    }

    resetPrice  () {
        this.setState ((state)=>({ discountPrice: (state.actualPriceBase * (state.discountPercent/ 100) * state.quantity)}));
        this.setState ((state)=>({ actualPrice: (state.actualPriceBase * state.quantity)}));  
        
    }  

   onPlusClick () {
       this.setState((state)=> ({ 
           quantity : state.quantity +1
       }));
       this.resetPrice();
   }

   onMinusClick () {
    if (this.state.quantity>0) {
    this.setState((state)=> ({ 
        quantity : state.quantity -1
    }));
    this.resetPrice();
   }
}

onAddToCartClicked (evt) {   
    evt.preventDefault();
    // this add the new item to the localstorage of the browser so that user can have access to it in any react component of the site 
  
     //setting the cart item lenght in the local storage if it does not exist
     if (localStorage.getItem("itemCount")==null) {
        localStorage.setItem("itemCount","1");         
     } 

     else {
         localStorage.setItem("itemCount", String(Number(localStorage.getItem("itemCount"))+1)); 
     }

     //item details are collected in json format
    let newCartItem= {
        itemName:"Autumn limited edition...",
        price: 125,
        quantity:this.state.quantity,
        totalPrice:this.state.discountPrice,
        imageIndex:localStorage.getItem("imageIndex"),
        itemNumber:localStorage.getItem("itemCount")       
    }
     
     //item json data are converted to string format i order to be able to store in localstorage
     let newCartItemStrFormat = JSON.stringify(newCartItem);     
     //item string format are stored in the localstorage with the key being the current length of the localstorage
     localStorage.setItem(localStorage.getItem("itemCount"),newCartItemStrFormat);
     alert("You added new item to cart\n(You need to refresh the page for the new item to reflect in your cart)");
     
}

    render () {
        return <div id='add-to-cart-container'>
        <div id='prices-contianer'>
            <h2 id='discount-price'>${this.state.discountPrice}</h2>
            <h5 id='discount-percent'>{this.state.discountPercent}%</h5>
            <p id='actual-price'>${this.state.actualPrice}</p>
        </div>

       <div id='cart-cal-div'>
       <div id='order-quantity-container'>
            <a id ='reduce-quantity'  onClick={this.onMinusClick}><img src={MinosIcon}/></a>
            <p id='quantity'>{this.state.quantity}</p>
            <a id='increase-quantity' onClick={this.onPlusClick}><img src={PlusIcon}/></a>
        </div>
        <a  id='add-to-cart-btn'  onClick= {this.onAddToCartClicked} href=""><img src={CartIcon}/> <p>Add to cart</p></a>
       </div>
    </div>
    }
}

export default AddToCart