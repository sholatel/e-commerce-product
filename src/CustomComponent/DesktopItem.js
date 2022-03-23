import React, { Component }  from 'react'
import images from '../images'
import DesktopItemStyle from '../CustomComponentStyle/DesktopItemStyle.css'


class DesktopItem extends Component {
    constructor () {
        super();
        this.onListClicked = this.onListClicked.bind(this);
    }

    onListClicked (evt) {
        document.getElementById("item-image-display").style.backgroundImage=`url(${images[evt.target.id]})`;
    }

    
    render () {
        const desktopItemDivStyle= {'backgroundImage':`url(${images[0]})`};
        
        return (
            <div id='desktop-item-div'>
                <div id='item-image-display' style={desktopItemDivStyle}>
                </div>
                <ul>
                  { images.map ((image, index)=>  <li onClick={this.onListClicked} className='images' key={index} ><img id={index} src={image} width="50px" height="50px"/></li>)}
                </ul>
            </div>

        );
    }

}

export default DesktopItem;