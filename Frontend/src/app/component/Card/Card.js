import "./Card.css";
import React from "react";
import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHouse, faSun, faTree, faCarrot, faLemon, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { faPagelines} from "@fortawesome/free-brands-svg-icons"
import faCactus from "../../../../public/assetes/cactus.png";
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
            qte: 1,
            description: props.item.description
        });
    }

    switch (props.item.weater) {
        case "inside":
          weaterIcon = <FontAwesomeIcon className="weaterIcon" icon={faHouse} />;
          break;
        default:
          weaterIcon = <FontAwesomeIcon className="weaterIcon" icon={faSun} />;
          break;
      }
      
      switch (props.item.type) {
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
                <p>${props.item.price}</p>
                </div>
                
                <div className="cardBtn">
                <button className="dotButton"><Link href={`/products/${props.item._id}`}><FontAwesomeIcon className="moreButtonIcon" icon={faEllipsis} /></Link></button>
                <button className="cartButton" onClick={handleAddToCart}><FontAwesomeIcon className="cartButtonIcon" icon={faCartShopping} /></button>
                    
                </div>

                </div>

                
            </div>

    )
}
export default Card;