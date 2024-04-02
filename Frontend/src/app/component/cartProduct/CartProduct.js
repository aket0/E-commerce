import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPlus, faMinus, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import "./CartProduct.css"

const CartProduct = ({cartItems, handleMinus, handlePlus, handleDelete, totalProduct, totalSum }) => {
let fee = 4.60
return(
    
    <div id="container">
    <div id="rollBackLink">
    <Link href="/"><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon></Link>
    </div>
        <div id="row">
        
            <div className="cartProduct">
                <h2 id="title">Cart summary</h2>
                    {cartItems.map((item, index) => (
                        
                            <div key={index} id="productFrame">
                                <div id="infoProduct">
                                    <div id="productTitle">
                                        <h3 id="qteProduct">{item.qte}x</h3>
                                        <h3>{item.name}</h3>
                                    </div>
                                    <div id="productDescription">
                                        <p>{item.description}</p>
                                    </div>
                                        <div id="footerProduct">
                                            <div id="priceSection">
                                                <p>${item.price * item.qte}</p>
                                            </div>
                                            <div id="optionPannel">
                                                <button id="option" onClick={() => handleMinus(index)}>
                                                    <FontAwesomeIcon icon={faMinus} className="fa-sm" />
                                                </button>
                                                <button id="option" onClick={() => handlePlus(index)}>
                                                    <FontAwesomeIcon icon={faPlus} className="fa-sm" />
                                                </button>
                                                <button id="option" onClick={() => handleDelete(index)}>
                                                    <FontAwesomeIcon icon={faXmark} className="fa-sm" />
                                                </button>
                                            </div>
                                        </div>    
                                    </div>
                                    <div id="imgProduct">
                                        <img id="imgprod" src={item.src}/>
                                    </div>
                                </div>  
                    ))}
                 </div>
                 <div id="pricingFrame">
                    <div id="pricingTitle">
                        <h2>Price details</h2>
                    </div>
                    <div id="line">
                        <p  id="subtitle">Subtotal</p>
                        <p>${totalSum}</p>
                    </div>
                    <div id="line">
                        <p id="subtitle">Shipping fees</p>
                        <p>${fee}</p>
                    </div>
                    <div id="line">
                        <h4>Total</h4>
                        <p>${totalSum + fee}</p>
                    </div>
                    <button id="confirmPayment">Pay now</button>

                 </div>
        </div>
    </div>
)
}
export default CartProduct;