import React, { createContext, useState, useEffect, useMemo } from "react";
// import { useNavigate } from "react-router-dom";

const AppContext = createContext();

export const MainContext = ({ children }) => {
  const [products, setProducts] = useState();
  const [cartItems, setCartItems] = useState();
  const [totalItemsInCart, setTotalItemsInCart] = useState(0);
  const [cartArray, setCartArray] = useState([]);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));

    // setCartArray((prev) => [...prev, ...products.filter((item)=>  item?.id === itemId)]);

    setCartArray((prevState) => {
      // Check if the item already exists in the previous state
      const existingItem = prevState.find((item) => item.id === itemId);

      // Add the item only if it doesn't already exist
      if (!existingItem) {
        return [
          ...prevState,
          ...products.filter((item) => item?.id === itemId),
        ];
      } else {
        // Handle the case where the item already exists (optional)
        console.log("Item already exists in cart");
        return prevState; // Don't modify the state
      }
    });

    // const sum = Object.values(cartItems).reduce(
    //   (acc, value) => acc + (value > 0 ? value : 0),
    //   0
    // );
    setTotalItemsInCart((prevState) => prevState + 1);

    // let cartMainArray = [];
    // for (let cartItem in cartItems) {
    //   if (cartItems[cartItem] > 0) {
    //     cartMainArray.push(cartItem);
    //   }
    // }
    // setCartArray(cartMainArray);
    console.log("cart Main Array", cartArray);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  useEffect(() => {
    console.log("cart items", cartItems);
    console.log("products in context", products);
    console.log("totalItemsInCart", totalItemsInCart);
    console.log("Cart Array", cartArray);
  }, [cartItems, setCartItems, products, setProducts, totalItemsInCart]);

  const value = useMemo(() => {
    return {
      cartItems,
      setCartItems,
      products,
      setProducts,
      addToCart,
      removeFromCart,
      totalItemsInCart,
      setTotalItemsInCart,
      cartArray,
    };
  }, [
    cartItems,
    setCartItems,
    products,
    setProducts,
    addToCart,
    removeFromCart,
    totalItemsInCart,
    setTotalItemsInCart,
    cartArray,
  ]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContext;
