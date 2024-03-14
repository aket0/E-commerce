import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";

function Cart({ cartItems, handleMinus, handlePlus, handleDelete, totalProduct, totalSum }) {
  
  if (cartItems.length > 0){
  
  return (
    <div className="cart">
      <table>
        <thead>
          <tr>
            <th colSpan={6}><h2 className="titleCart">My Shopping Cart</h2></th>
          </tr>
        </thead>
        <tbody className="scrollable-body">
          {cartItems.map((item, index) => (
            <tr key={index}>
              <td>
                
                  <img src={item.src} alt="productImage" />
                  </td>
                  <td>
                  <span>{item.name}</span>
                
              </td>
              <td>
                <span className="itemQte">{item.qte}</span>
              </td>
              <td>
                <span className="itemPrice">{item.price * item.qte} $</span>
              </td>
              <td>
                <div className="cartIcon">
                  <button onClick={() => handleMinus(index)}>
                    <FontAwesomeIcon icon={faMinus} className="fa-lg" />
                  </button>
                  <button onClick={() => handlePlus(index)}>
                    <FontAwesomeIcon icon={faPlus} className="fa-lg" />
                  </button>
                  <button onClick={() => handleDelete(index)}>
                    <FontAwesomeIcon icon={faXmark} className="fa-lg" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={2}>{totalProduct} product(s)</td>
            <td colSpan={4}>Total: {totalSum} $</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );

}else{
  return (
    <div className="cart">
      <table>
        <thead>
          <tr>
            <th colSpan={6}><h2 className="titleCart">My Shopping Cart</h2></th>
          </tr>
        </thead>
        <tbody className="scrollable-body">
          <tr>
            <td colSpan={6} className="Emptycart">Your shopping cart is empty</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={2}>{totalProduct} product(s)</td>
            <td colSpan={4}>Total: {totalSum} $</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
}
export default Cart;

