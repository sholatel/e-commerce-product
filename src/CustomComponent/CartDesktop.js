import React, {useState} from 'react'
import cartIcon from '../icons/icon-cart.svg'
import CartStyle from '../CustomComponentStyle/CartStyleDesktop.css'


function CartDesktop ()  {
 let [itemCount, setItemCount] = useState(localStorage.getItem('itemCount'));       

 function onCartClick () {

         let cartBtn = document.getElementById('cart-item-div-desktop') ;
         if (window.getComputedStyle(cartBtn).display=='none') {
                document.getElementById('cart-item-div-desktop')   .style.display='block';  
                document.getElementById('cart-div-desktop').querySelector('img').style.filter="brightness(0%) opacity(1)";
                  
        }

        else {
                document.getElementById('cart-item-div-desktop')   .style.display='none';    
                document.getElementById('cart-div-desktop').querySelector('img').style.filter="brightness(0%) opacity(0.6)";   
        }
} 

 return <div id ="cart-div-desktop" onClick={onCartClick}>
        <img src={cartIcon} width="15px" height="15px"/>
        <p id='cart-item-no-desktop'>{itemCount}</p>    
        </div>   
    
}

export default CartDesktop