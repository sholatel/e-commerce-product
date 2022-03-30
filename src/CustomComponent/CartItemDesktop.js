import React, {useState} from 'react'
import CartItemStyle from '../CustomComponentStyle/CartItemStyleDesktop.css'
import images from '../images'
import IconPrevious from '../icons/icon-delete.svg'


function CartItemDesktop  (props) {
    let [cartItems, setCartItems]=useState(Object.keys(localStorage));
    function JSONPaser(stringValue) {
        return JSON.parse(stringValue);
    }

    function onDeleteItem (evt) {
        localStorage.removeItem(evt.target.id);
        if ("0".localeCompare(localStorage.getItem("itemCount"))!=0) {
            localStorage.setItem("itemCount", String(Number(localStorage.getItem("itemCount"))-1)); 
         } 
         //update the cart count node with JS DOM
         document.getElementById("cart-item-no").innerHTML=localStorage.getItem("itemCount");
         document.getElementById("cart-item-no-desktop").innerHTML=localStorage.getItem("itemCount");
        updateState();
    } 
    
    let updateState= () => {
        setCartItems (Object.keys(localStorage))
    }

    let itemArray= new Array();
    cartItems.map(key=> {
        if ("itemCount".localeCompare(key) !=0 &&  "imageIndex".localeCompare(key) !=0 )  {
            itemArray.push(localStorage.getItem(key));
        }
    });
    
    if (itemArray.length!=0) {
        
            return ( <div id ='cart-item-div-desktop'>
            <h2 id='cart-item-header-desktop'>Cart</h2> 
        
            {itemArray.map(cartItemString=> (
        
        <li className="cart-item-desktop" key={JSONPaser(cartItemString).itemNumber}>  
        <img className='product-img-desktop' src={images[JSONPaser(cartItemString).imageIndex]} width="40" height="40"/>
        <span>
                <p className="product-name">{JSONPaser(cartItemString).itemName}</p>
                <p className="product-price">{JSONPaser(cartItemString).price} * {JSONPaser(cartItemString).quantity} </p>
                <p className="resulting-amount">{JSONPaser(cartItemString).totalPrice}</p> 
            </span> 
           <a onClick={onDeleteItem} href="javascript:(void)"><img className='rmv-btn' id={JSONPaser(cartItemString).itemNumber} src={IconPrevious} width="15" height="15" />  </a>  
        </li> 
    
  
    ))}
            
            <a id='checkout-btn'>Checkout</a>
        </div> 
    )
    }

    else {
        return  (
        <div id ='cart-item-div-desktop'>
            <h2
             id='cart-item-header-desktop'>Cart</h2>        
            <p id='empty-session-message-desktop'>Your cart is empty</p>
        </div> 
     )
    }

}

export default CartItemDesktop