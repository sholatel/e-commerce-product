import logo from './logo.svg';
import './App.css';
import Cart from './CustomComponent/Cart'
import ProfilePics from './CustomComponent/ProfilePics'
import Nav from './CustomComponent/Nav'
import Item from './CustomComponent/Items';
import CompanySummary from './CustomComponent/CompanySummary';
import AddToCart from './CustomComponent/AddToCart';
import topNav  from './CustomComponent/TopNav';
import TopNav from './CustomComponent/TopNav';
import CartItem from './CustomComponent/CartItem';
import CartItemDesktop from './CustomComponent/CartItemDesktop';
import CartDesktop from './CustomComponent/CartDesktop';
import DesktopItem from './CustomComponent/DesktopItem';


function App()  {
  
  //function for changing the ui when the nav componnet is clicked

  function showNavClick () {  
    document.getElementById('left-grid').style.alignItems="flex-start";   
    document.getElementById('App-header').style.paddingLeft="0px";
    document.getElementById ('left-next-button').style.display="none";
    document.querySelector('div.App').style.position="fixed";
  }

//Function tasked to restore the previous state of the UI before beign change by the showNavClickHandler 

  function hideNavClick () {  
    document.getElementById('left-grid').style.alignItems="center";   
    document.getElementById('App-header').style.paddingLeft="10px";
    document.getElementById ('left-next-button').style.display="grid";
    document.querySelector('div.App').style.position="static";
  }

  return (
    <div className="App">
      <header id="App-header">  
      <section id ="left-grid">      
        <Nav className="nav" showNavHandler={showNavClick} hideNavHandler={hideNavClick}/>
        <div id="App-logo"> <img src={logo}/></div>  
        <TopNav/>     
      </section>       
      <section id="right-grid">
        <Cart id='cart'></Cart>
        <CartDesktop/>
        <ProfilePics id='profile-pics'/> 
      </section>  
      <div id="header-seperator"></div>
      </header>   
      <CartItemDesktop/>

      {/*The content section for mobile phones */}
      <section id="item-display-mobile">
      <Item />
      <CompanySummary/>
      <AddToCart/>
        </section> 
        
      {/*The content section for desktop */}
       <section id='item-display-desktop'>  
          <DesktopItem/>
         <div id='summary-and-add-to-cart'>
          <CompanySummary/>
          <AddToCart/>
         </div>
         </section>  
    </div>   
  );
} 

export default App;
