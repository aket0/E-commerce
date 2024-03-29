import { render } from 'react-dom';
import './Item.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faTree } from "@fortawesome/free-solid-svg-icons";
import faCactus from "../../../../public/assetes/cactus.png";
import faFlower from "../../../../public/assetes/tulipe.png"
import faVegetable from "../../../../public/assetes/fruit.png";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from 'react';
import { createRouter } from 'next-connect';
import Image from 'next/image';
import React from 'react'

const Item = ({product}) => {

    let weaterIcon = null;
    let typeIcon = null


    const handleAddToCart = () => {
        addToCart({
            name: product.name,
            price: product.price,
            src: product.src,
            qte: 1
        });
    }

    if (product.weater === "inside"){
        weaterIcon = <FontAwesomeIcon className="weaterIcon" icon={faHouse} />
    }else{
        weaterIcon = <FontAwesomeIcon className="weaterIcon" icon={faSun} />
    }
    if (product.type === "tree"){
        typeIcon = <FontAwesomeIcon className="typeIcon" icon={faTree} />
    }else if (product.type === "cactus"){
        typeIcon = <Image className="typeIcon" src={faCactus}  alt=""/>

    }else if (product.type === "flower"){
        typeIcon = <Image className="typeIcon" src={faFlower}  alt=""/>

    }else{
        typeIcon = <Image className="typeIcon" src={faVegetable}  alt=""/>
    }




  return (
    <div id='container'>
    <div id='row'>
    <div id='frame'>
    <div id='left-pannel'>
      <img src={product.src}/>
    </div>
    <div id='right-pannel'>
    <div id='title'>
    <h1>{product.name}</h1>
    </div>
    <div id='text'>
    <p id='description'>{product.description}</p>
    </div>
      <div id='icon'>
      <p>{weaterIcon}</p>
      <p>{typeIcon}</p>
      <p>{product.price + " $"}</p>
      </div>
      <button id='addToCart' onClick={handleAddToCart}>Add to Cart <FontAwesomeIcon className="cartButtonIcon" icon={faCartShopping} /> </button>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Item
