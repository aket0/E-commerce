import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";
import Link from "next/link";

const Cart = ({ cartItems, handleMinus, handlePlus, handleDelete, totalProduct, totalSum }) => {
  
  if (cartItems.length > 0){
  
  return (
    <div className="cart">
      <div id="cartTitle">
        <h2>Plant Cart</h2>
      </div>
      <div id="table">
          <div id="tableTitle">
              <span id="SelectedPlant" colSpan={3}>Selected Plant</span>
              <span id="totalPrice" colSpan={0}>Total Price</span>
          </div>
          <div id="cartLenght">{cartItems.map((item, index) => (
            <div  key={index}>
              <div id="item">
                <div id="productSpect">
                  <img src={item.src} alt="productImage" />
                  <div id="itemName">
                  <span id="titleItem">{item.name}</span>
                  <span id="itemQte">x{item.qte}</span>
                  </div>
                  </div>
                  <div id="price">
                <span id="itemPrice">${item.price * item.qte}</span>
                </div>
            </div>
            </div>
          ))}
          </div>
        
      </div>
      <div id="summary">
      <span id="summarySpan">Order Summary</span>
      <span id="totalSum">${totalSum}</span>
      </div>
      <div id="termOfServices">
      <input type="checkbox" id="CheckTermsOfService" checked/>
      <label id="agreeTerm">Agree to Terms of Service</label>
      </div>
      <div id="proceed">
       <button><Link href="../../cart">Proceed to payment</Link></button>     
      </div>
    </div>
  )

}else{
  return (
    <div className="cart">
      <div id="cartTitle">
        <h2>Plant Cart</h2>
      </div>
      <div id="table">
          <div id="tableTitle">
              <span id="SelectedPlant" >Selected Plant</span>
              <span id="totalPrice" >Total Price</span>
          </div>
          <div id="cartLenght">
            <div >
              <div id="Emptyitem">
                <div id="emptySpect">
                  <span id="emptyCart">Empty Cart</span>
                  </div>
                  <div id="price">
                <span id="itemPrice"></span>
                </div>
            </div>
            </div>
         
          </div>
        
      </div>
      <div id="summary">
      <span id="summarySpan">Order Summary</span>
      <span id="totalSum">$0</span>
      </div>
      <div id="termOfServices">
      <input type="checkbox" id="CheckTermsOfService" checked/>
      <label id="agreeTerm">Agree to Terms of Service</label>
      </div>
      <div id="proceed">
       <button><Link href="../../cart">Proceed to payment</Link></button>     
      </div>
    </div>
  )
}
}
export default Cart;

