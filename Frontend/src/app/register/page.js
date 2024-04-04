"use client"
import React from "react"
import { useState, useEffect } from "react"
import Register from "../component/Register/Register"
import Login from "../component/Login/Login"
import Cart from "@/component/Cart/Cart"
import Header from "../component/Header/Header"
import dynamic from "next/dynamic"

const LoginPage = () => {
    const [product, setProduct] = useState(null);
    const [list, setList] = React.useState([]);
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

  const handleSelect = (type) => {
    setSelectedOption(type);
  };
  const handleWeater = (weater) => {
    setSelectedOption(weater);
  };
  const addToCart = (product) => {
    const existingItem = cartItems.find(cartItem => cartItem.name === product.name);

    if (existingItem) {
      const updatedCartItems = cartItems.map(cartItem => {
        if (cartItem.name === product.name) {
          return { ...cartItem, qte: cartItem.qte + product.qte };
        }
        return cartItem;
      });
  
      setCartItems(updatedCartItems);
    } else {
      const newItem = {
        name: product.name,
        price: product.price,
        src: product.src,
        qte: product.qte,
        description: product.description
      };
      
  
      setCartItems([...cartItems, newItem]);
    }
  };


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
            <Register/>
        </div>
    );

}
}

export default dynamic (() => Promise.resolve(LoginPage),{ssr: false} ) 