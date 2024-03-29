"use client"
import React, { useEffect, useState } from 'react';
import Header from '../../component/Header/Header';
import Navbar from '../../component/Navbar/NavBar';
import Cart from '../../component/Cart/Cart';
import Login from '@/component/Login/Login';
import dynamic from 'next/dynamic';
import Item from '../../component/Item/Item';

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const [list, setList] = React.useState([]);
  const [user, setUser] = React.useState([]);




  useEffect(() => {
    fetch(`http://localhost:4000/api/itemList`)
      .then(res => res.json())
      .then(data => setList(data))
   
  }, []);

     

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
          return { ...cartItem, qte: cartItem.qte + 1 };
        }
        return cartItem;
      });
  
      setCartItems(updatedCartItems);
    } else {
      const newItem = {
        name: product.name,
        price: product.price,
        src: product.src,
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


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Extraire l'ID du produit de l'URL
        const productId = window.location.pathname.split('/').pop();
        console.log(productId);

        // Envoyer une requête GET à votre API pour récupérer les détails du produit
        const response = await fetch(`http://localhost:4000/api/product/${productId}`);

        
        if (response.ok) {
          
          const data = await response.json();
          
          setProduct(data);
          console.log(product);
          
        } else {
          console.error('Error fetching product data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProduct();
  }, []);

  return (
    <div>
      <Header onCartToggle={toggleCart} totalProduct={totalProduct} onLogginToggle={toggleLogin} user={user}/>
      {isLoginVisible && <Login />}
      {isCartVisible && <Cart cartItems={cartItems} handleMinus={handleMinus} handlePlus={handlePlus} handleDelete={handleDelete} totalProduct={totalProduct} totalSum={totalSum}  />}
      <Navbar onSelect={handleSelect} onWeaterSelect={handleWeater} />
     {product && <Item product={product} addToCart={addToCart}/>}
      
    </div>
  );
};
}

export default dynamic (() => Promise.resolve(ProductPage),{ssr: false} ) 
