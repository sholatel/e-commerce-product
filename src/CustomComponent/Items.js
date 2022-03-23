import react from 'react'
import React, { Component } from 'react'
import images from '../images'
import ItemStyle from '../CustomComponentStyle/ItemStyle.css'
import IconNext from '../icons/icon-next.svg'
import IconPrevious from '../icons/icon-previous.svg'
import CartItem  from './CartItem'

class Item extends Component {
    constructor (props) {
        super (props);
        this.state= {
            imageIndex:0
        };

        this.onNextClickHandler=this.onNextClickHandler.bind(this);
        this.onPreviousClickHandler=this.onPreviousClickHandler.bind(this); 
        localStorage.setItem("imageIndex",String(this.state.imageIndex));
        
    }



// this handler handles the event when the next icon is clicked 
//by changing the image index in the images list imported 
//above    
onNextClickHandler () {
    
    if (this.state.imageIndex<images.length-1) {
         
        this.setState ((state) =>  ({
            imageIndex:state.imageIndex +1
        }));
        localStorage.setItem("imageIndex",String(this.state.imageIndex));
    }  

    else {
        //do nothing 
    }


}


// this handler handles the event when the previous icon is clicked 
//by changing the image index in the images list imported 
//above
onPreviousClickHandler () {
    if (this.state.imageIndex>0) {        
        this.setState ((state) =>  ({
            imageIndex : state.imageIndex -1
        }));
        localStorage.setItem("imageIndex",String(this.state.imageIndex));
    }   

}

    render () {
        return (
            <div id="product-container" >  
                <CartItem id='cart-item' />
                <img id="product-images" src={images[this.state.imageIndex]} width="100%" height="100%"/> 
                <a id='left-next-button' href='javascript:void()' onClick={this.onPreviousClickHandler}><img src={IconPrevious }></img></a>
                <a id='right-next-button' href='javascript:void()' onClick={this.onNextClickHandler}><img src={IconNext}></img></a>
            </div>             
        )
    }
}

export default  Item