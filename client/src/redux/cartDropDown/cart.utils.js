

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItem = (cartItems, itemToRemove)=>{
      const existingCartItem = cartItems.find(curentItem=>curentItem.id===itemToRemove.id);
      if(existingCartItem.quantity>1){
        return cartItems.map(cartItem=>
          cartItem === itemToRemove?
          {...cartItem, quantity:cartItem.quantity - 1}
          :cartItem
          )
      }
      else {
        return [...cartItems.filter(cartItem => cartItem.id!==itemToRemove.id) ];
      }
     
}