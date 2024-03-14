"use client"
import './globals.css';
import Navbar from './component/Navbar/NavBar';
import Header from './component/Header/Header';
import Body from './component/Body/Body';
import React from 'react';
import Cart from './component/Cart/Cart';
import Login from './component/Login/Login';
import { useState, useEffect } from 'react';



export default function Home() {
  const [list, setList] = React.useState([]);
  const [user, setUser] = React.useState([]);



  useEffect(() => {
    fetch(`http://localhost:4000/api/itemList`) // Changez l'URL en fonction de votre configuration
      .then(res => res.json())
      .then(data => setList(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);
 



     

  const [selectedOption, setSelectedOption] = useState(null);
  const [cartItems, setCartItems] = useState(() => {
    if (typeof window !== 'undefined') {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    return storedCartItems;
    }
  });
  
  const [isCartVisible, setCartVisible] = useState(false);

  const[isLoginVisible, setLogginVisible] = useState(false)
  
  useEffect(() => {
   
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    
  }, [cartItems]);
  
  const toggleCart = () => {
      setCartVisible(!isCartVisible);
      
  };
  const toggleLogin = () => {
    setLogginVisible(!isLoginVisible);
  }

  const handleSelect = (type) => {
    setSelectedOption(type);
  };
  const handleWeater = (weater) => {
    setSelectedOption(weater);
  };
  const addToCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.name === item.name);

    if (existingItem) {
      const updatedCartItems = cartItems.map(cartItem => {
        if (cartItem.name === item.name) {
          return { ...cartItem, qte: cartItem.qte + 1 };
        }
        return cartItem;
      });
  
      setCartItems(updatedCartItems);
    } else {
      const newItem = {
        name: item.name,
        price: item.price,
        src: item.src,
        qte: 1
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

  

  

  return (
    <div className="App">
      <Header onCartToggle={toggleCart} totalProduct={totalProduct} onLogginToggle={toggleLogin} user={user}/>
      {isLoginVisible && <Login />}
      {isCartVisible && <Cart cartItems={cartItems} handleMinus={handleMinus} handlePlus={handlePlus} handleDelete={handleDelete} totalProduct={totalProduct} totalSum={totalSum}  />}
      <Navbar onSelect={handleSelect} onWeaterSelect={handleWeater} />
      <Body selectedOption={selectedOption} addToCart={addToCart} list={list}/>
    </div>
  );

}
}

