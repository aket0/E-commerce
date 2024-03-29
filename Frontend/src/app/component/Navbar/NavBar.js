import React from "react";
import "./Navbar.css"


function Navbar({ onSelect, onWeaterSelect }) {
    const handleClick = (type) => {
        onSelect(type);
      };
      
      const handleWeater = (weater) => {
        onWeaterSelect(weater);
      };

     

    
  
    return (
      <div id="navbar">
        <ul>
        <li>
            <button><a href="#all">All</a></button>
          </li>
          <li>
            <button><a href="#inside">Inside</a></button>
          </li>
          <li>
            <a href="#outside">Outside</a>
          </li>
          <li>
            <a href="#cactus">Cactus</a>
          </li>
          <li>
            <a href="#flower">Flower</a>
          </li>
          <li>
            <a href="#vegetable">Vegetable</a>
          </li>
          <li>
            <a href="#tree">Tree</a>
          </li>
        </ul>
      </div>
    );
  }
  
  export default Navbar;