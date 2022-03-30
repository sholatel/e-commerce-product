import React, {useState} from 'react';
import cartIcon from '../icons/icon-cart.svg';
import CartStyle from '../CustomComponentStyle/CartStyle.css';
import CartItem  from './CartItem';

function Cart ()  {
 let [itemCount, setItemCount] = useState(localStorage.getItem('itemCount'));
 function onCartClick () {
       
         let cartBtn = document.getElementById('cart-item-div') ;
         if (window.getComputedStyle(cartBtn).display=='none') {
                document.getElementById('cart-item-div')   .style.display='block';  
                document.getElementById('cart-div').querySelector('img').style.filter="brightness(0%) opacity(1)";
                  
        }

        else {
                document.getElementById('cart-item-div')   .style.display='none';    
                document.getElementById('cart-div').querySelector('img').style.filter="brightness(0%) opacity(0.6)";   
        }
} 

 return <div id ="cart-div" onClick={onCartClick}>
        <img src={cartIcon} width="15px" height="15px"/>
        <p id='cart-item-no'>{itemCount}</p>    
        </div>   
    
}

export default Cart