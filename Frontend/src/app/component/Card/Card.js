import "./Card.css";
import React from "react";
import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faTree } from "@fortawesome/free-solid-svg-icons";
import faCactus from "../../../../public/assetes/cactus.png";
import faFlower from "../../../../public/assetes/tulipe.png"
import faVegetable from "../../../../public/assetes/fruit.png";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

function Card(props){

    let weaterIcon = null;
    let typeIcon = null
    const router = useRouter();

    
        
     

    const handleAddToCart = () => {
        props.addToCart({
            name: props.item.name,
            price: props.item.price,
            src: props.item.src,
            qte: 1
        });
    }




    
    if (props.item.weater === "inside"){
        weaterIcon = <FontAwesomeIcon className="weaterIcon" icon={faHouse} />
    }else{
        weaterIcon = <FontAwesomeIcon className="weaterIcon" icon={faSun} />
    }
    if (props.item.type === "tree"){
        typeIcon = <FontAwesomeIcon className="typeIcon" icon={faTree} />
    }else if (props.item.type === "cactus"){
        typeIcon = <Image className="typeIcon" src={faCactus}  alt=""/>

    }else if (props.item.type === "flower"){
        typeIcon = <Image className="typeIcon" src={faFlower}  alt=""/>

    }else{
        typeIcon = <Image className="typeIcon" src={faVegetable}  alt=""/>
    }


    
    
    return (
            <div className="card">
             
                <div className="cardImg">
                <img src={props.item.src} alt={props.item.name}/>
                </div>
                
                <div className="cardBody">
                <div className="cardTitle">
                <h3>{props.item.name}</h3>
                </div>
                <div className="cardInfo">
                <p>{weaterIcon}</p>
                <p>{typeIcon}</p>
                <p>{props.item.price} €</p>
                </div>
                
                <div className="cardBtn">
                <button className="dotButton"><Link href={`/products/${props.item._id}`}><FontAwesomeIcon className="moreButtonIcon" icon={faEllipsis} /></Link>L</button>
                <button className="cartButton" onClick={handleAddToCart}><FontAwesomeIcon className="cartButtonIcon" icon={faCartShopping} /></button>
                    
                </div>

                </div>

                
            </div>

    )
}
export default Card;