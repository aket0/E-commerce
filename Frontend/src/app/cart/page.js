"use client"
import React from "react";
import Header from "../component/Header/Header";
import Login from "../component/Login/Login";
import Cart from "../component/Cart/Cart";
import CartProduct from "../component/cartProduct/CartProduct";
import { useState, useEffect } from "react";2
import dynamic from "next/dynamic";


const cartPage = (cartItem) => {

    const [user, setUser] = React.useState([]);  
  const [selectedOption, setSelectedOption] = useState(null);
  const [cartItems, setCartItems] = useState(() => {
    if (typeof localStorage !== 'undefined') {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    return storedCartItems;
  
}});
  
  const [isCartVisible, setCartVisible] = useState(false);

  const[isLoginVisible, setLogginVisible] = useState(false)
  
  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
   
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
}}, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    
  }, [cartItems]);
  
  const toggleCart = () => {
      setCartVisible(!isCartVisible);
      setLogginVisible(false)
      
  };
  const toggleLogin = () => {
    setLogginVisible(!isLoginVisible);
    setCartVisible(false);
  }
  const handleMinus = (index) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].qte > 1) {
      updatedCartItems[index].qte--;
      setCartItems(updatedCartItems);
    } else if (updatedCartItems[index].qte <= 1) {
      
      handleDelete(index);
    }
  };  

  const handlePlus = (index) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].qte >= 0) {
      updatedCartItems[index].qte++;
      setCartItems(updatedCartItems);
    }
  };
  const handleDelete = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    alert("remove from cart ?");
    setCartItems(updatedCartItems);
  };
  if (cartItems && Array.isArray(cartItems)) {
  const totalSum = cartItems.reduce((acc, item) => acc + item.price * item.qte, 0)
  const totalProduct = cartItems.reduce((acc, item) => acc + item.qte, 0)
  
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);



    return(
        <div>
        <Header onCartToggle={toggleCart} totalProduct={totalProduct} onLogginToggle={toggleLogin} user={user}/>
      {isLoginVisible && <Login />}
      {isCartVisible && <Cart cartItems={cartItems} handleMinus={handleMinus} handlePlus={handlePlus} handleDelete={handleDelete} totalProduct={totalProduct} totalSum={totalSum}  />}
      <CartProduct cartItems={cartItems} handleMinus={handleMinus} handlePlus={handlePlus} handleDelete={handleDelete} totalProduct={totalProduct} totalSum={totalSum}/>
        </div>
    )
}
}

export default dynamic (() => Promise.resolve(cartPage),{ssr: false} )