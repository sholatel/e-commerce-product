import React, { Component } from 'react'
import NavStyle from '../CustomComponentStyle/NavStyle.css'
import iconMenu from '../icons/icon-menu.svg'
import closeMenu from '../icons/icon-close.svg'

class Nav extends Component {
    constructor (props) { 
        super(props) 
        this.navIconRef=React.createRef ();
        this.showNavClickHandler = this.showNavClickHandler.bind(this);
        this.hideNavClickHandler=this.hideNavClickHandler.bind(this);
        this.navRef=React.createRef();
    }

    //this method is used to change the structure of the 
    //ui when the nav icon is clicked  
    showNavClickHandler (evt) {
        evt.preventDefault();
        document.getElementById('App-header').style.padding='0';
        this.props.showNavHandler();      
        this.navIconRef.current.style.display="none";  
        this.navRef.current.style.display="block"; 
        this.navRef.current.style.width="70%";  
        this.navRef.current.style.animationName='side-nav-anim-out';
        Array.from(document.getElementsByClassName('nav-menu')).map (element=>{
            element.style.animationName='side-nav-a-anim-out';
        });          

       
    }

    //method for handling the click event when hide nav button
    //is clicked which hellps to restore the previous state of the 
    //ui is chnaged by the showNavClickHandler method
    hideNavClickHandler () {
        this.navRef.current.style.width="0";     
        Array.from(document.getElementsByClassName('nav-menu')).map (element=>{
            element.style.animationName='side-nav-a-anim-in'
        });
        this.navRef.current.style.animationName='side-nav-anim-in';
        this.navRef.current.style.display="none";
        this.navIconRef.current.style.display="inline-block";
        this.props.hideNavHandler();
    
    }



    render () {
        return <React.Fragment>
          <div className='nav-bar'>
             <a href='javscript:void(0)' ref={this.navIconRef} id="nav-icon" onClick={this.showNavClickHandler}> <img src={iconMenu}/></a>
             </div>
            <div className='side-nav'  ref={this.navRef} > 
            <a className='nav-menu' href='javascript:void(0)' id="hide-nav" onClick={this.hideNavClickHandler}> <img src={closeMenu}></img></a>
            <a  className='nav-menu'href=''>Collections</a>
            <a className='nav-menu' href=''>Men</a>
            <a className='nav-menu' href=''>Women</a>
            <a className='nav-menu' href=''>About</a>
            <a  className='nav-menu' href=''>Contact</a>  
            </div>
           
            
            
         
        </React.Fragment> 
           
        
    }
}

export default Nav