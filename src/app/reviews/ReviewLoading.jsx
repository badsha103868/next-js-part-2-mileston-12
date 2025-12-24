import ReviewSkeleton from '@/Components/skeletons/ReviewCardSkeleton';
import React from 'react';

const ReviewLoading = () => {
  return (
    <div  className='grid my-5 grid-cols-1 md:grid-cols-3  gap-5'>
      {
        [...Array(12)].map((_ ,index)=><ReviewSkeleton key={index}></ReviewSkeleton>)
      }
    </div>
  );
};

export default ReviewLoading;