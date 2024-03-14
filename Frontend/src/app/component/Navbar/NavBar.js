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
            <button onClick={() => handleClick("")}>All</button>
          </li>
          <li>
            <button onClick={() => handleWeater("inside")}>Inside</button>
          </li>
          <li>
            <button onClick={() => handleWeater("outside")}>Outside</button>
          </li>
          <li>
            <button onClick={() => handleClick("cactus")}>Cactus</button>
          </li>
          <li>
            <button onClick={() => handleClick("flower")}>Flower</button>
          </li>
          <li>
            <button onClick={() => handleClick("vegetable")}>Vegetable</button>
          </li>
          <li>
            <button onClick={() => handleClick("tree")}>Tree</button>
          </li>
        </ul>
      </div>
    );
  }
  
  export default Navbar;