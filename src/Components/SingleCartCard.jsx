import React from 'react';

const SingleCartCard = ({singleCart}) => {
  console.log(singleCart)
  return (
    <div className='flex justify-between items-center bg-gray-200 text-black font-semibold rounded-2xl p-2'>
      <h2>{singleCart.title}</h2>
      <p className='text-green-500'>{singleCart.price}</p>
    </div>
  );
};

export default SingleCartCard;