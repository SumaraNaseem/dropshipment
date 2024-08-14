import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa';
import './navbar.css';

const Header = () => {
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
      setOpen(!open);
    };
  
    return (
      
      <div className="navbar-container-navbar">
       <div className='custom-built'>
       <p style={{color:"white",fontSize:"18px", fontFamily:"sans-serif"}}> Get a custom built Shopify store by us!</p>
       <button className="nav-button">Claim offer</button>
        </div>
       </div>
        
       
        
     
      
      
    );
}

export default Header;
