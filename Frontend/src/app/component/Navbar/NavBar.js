import React from "react";
import "./Navbar.css"
import faCactus from "../../../../public/assetes/cactus.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHouse, faSun, faTree, faCarrot, faLemon, faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import Image from "next/image";
import { faPagelines } from "@fortawesome/free-brands-svg-icons";



const Navbar = () => {
  
    return (
      <div id="navbar">
        <ul>
          <li>
            <FontAwesomeIcon className="typeIcon" icon={faHouse}/>
            <a href="#inside">Indoor</a>
          </li>
          <li>
            <FontAwesomeIcon className="typeIcon" icon={faSun}/>
            <a href="#outside">Outdoor</a>
          </li>
          <li>
            <Image className="typeIcon" src={faCactus}/>
            <a href="#cactus">Cactus</a>
          </li>
          <li>
            <FontAwesomeIcon className="typeIcon" icon={faPagelines}/>
            <a href="#flower">Flower</a>
          </li>
          <li>
            <FontAwesomeIcon className="typeIcon" icon={faCarrot}/>
            <a href="#vegetable">Vegetable</a>
          </li>
          <li>
            <FontAwesomeIcon className="typeIcon" icon={faTree}/>
            <a href="#tree">Tree</a>
          </li>
        </ul>
      </div>
    );
  }
  
  export default Navbar;