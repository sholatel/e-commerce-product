import React, { Component }  from 'react'
import images from '../images'
import DesktopItemStyle from '../CustomComponentStyle/DesktopItemStyle.css'


class DesktopItem extends Component {
    constructor () {
        super();
    }

    
    render () {
        const desktopItemDivStyle= {'backgroundImage':`url(${images[0]})`};
        
        return (
            <div id='desktop-item-div'>
                <div id='item-image-display' style={desktopItemDivStyle}>
                </div>
                <ul>
                  { images.map (image=> <li className='images'><img src={image} width="50px" height="50px"></img></li>)}
                </ul>
            </div>

        );
    }

}

export default DesktopItem;