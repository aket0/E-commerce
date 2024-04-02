import { render } from 'react-dom';
import './Item.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHouse, faSun, faTree, faCarrot, faLemon, faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { faPagelines} from "@fortawesome/free-brands-svg-icons"
import faCactus from "../../../../public/assetes/cactus2.png";
import { useState, useEffect } from 'react';
import { createRouter } from 'next-connect';
import Image from 'next/image';
import React from 'react'
import Link from 'next/link';

const Item = ({product, addToCart}) => {

    let weaterIcon = null;
    let typeIcon = null
    const [quantity, setQuantity] = useState(1)


    const handleAddToCart = () => {
        addToCart({
            name: product.name,
            price: product.price,
            src: product.src,
            qte: parseInt(quantity),
            description: product.description
        });
    }
    switch (product.weater) {
        case "inside":
          weaterIcon = <FontAwesomeIcon className="weaterIcon" icon={faHouse} />;
          break;
        default:
          weaterIcon = <FontAwesomeIcon className="weaterIcon" icon={faSun} />;
          break;
      }
      
      switch (product.type) {
        case "tree":
          typeIcon = <FontAwesomeIcon className="typeIcon" icon={faTree} />;
          break;
        case "cactus":
          typeIcon = <Image className="typeIcon" src={faCactus}  alt="" />;
          break;
        case "flower":
          typeIcon = <FontAwesomeIcon className="typeIcon" icon={faPagelines}  alt="" />;
          break;
        case "vegetable":
          typeIcon = <FontAwesomeIcon className='typeIcon' icon={faCarrot} />;
          break;
        case "fruit":
          typeIcon = <FontAwesomeIcon className='typeIcon' icon={faLemon} />;
          break;
        default:
          break;
      }
      





  return (
    <div id='container'>
    <div id='row'>
    <div id='rollBackLink'>
    <Link href="/"><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon></Link>

    </div>
    <div id='frame'>
    <div id='left-pannel'>
      <img src={product.src}/>
    </div>
    <div id='right-pannel'>
    <div id='title'>
    <h1>{product.name}</h1>
    </div>
    <div id='icon'>
      <p>{weaterIcon}</p>
      <p>{typeIcon}</p>
      </div>
    <div id='text'>
    <p id='description'>{product.description}</p>
    </div>
    <div id='pricing'>
        <p id='price'>Top pick</p>
        <p id='priceValue'>${product.price}</p>
    </div>
    <select id='quantity' name='quantity' value={quantity} onChange={(e) => setQuantity(e.target.value)}>
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              ))}
            </select>
      <button id='addToCart' onClick={() => handleAddToCart(product)}>Add to Cart <FontAwesomeIcon className="cartButtonIcon" icon={faCartShopping} /> </button>
      <button id='buyNow' onClick={() => handleAddToCart(product)}><Link href="../../cart">Buy now </Link></button>

    </div>
    </div>
    </div>
    </div>
  )
}

export default Item
