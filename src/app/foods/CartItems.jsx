"use client"
import SingleCartCard from '@/Components/SingleCartCard';
import { CartContext } from '@/context/CartProvider';
import React, { use } from 'react';

const CartItems = () => {
  const { cart } = use(CartContext)
  
  return (
    <div>
      <p>{cart.length} Items Added</p>
      <div className='flex flex-col gap-3  '>
        {cart.map(singleCart=><SingleCartCard key={singleCart.id} singleCart={singleCart}></SingleCartCard>)}
      </div>
    </div>
  );
};

export default CartItems;