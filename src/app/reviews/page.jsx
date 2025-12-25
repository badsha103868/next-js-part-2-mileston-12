import React from 'react';
import ReviewsPage from './ReviewsPage';

// export const metadata = {
//   title: "All Reviews",
//   description: "Best Restaurant in Khulna",
// };
// nijer moto kore meta set korte absolute use
export const metadata = {
  title: {
    absolute:"Satisfied users"
  },
  description: "Best Restaurant in Khulna",
};

const page = () => {
  return (
    <div>
      <ReviewsPage></ReviewsPage>
    </div>
  );
};

export default page;