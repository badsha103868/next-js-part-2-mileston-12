
import Link from "next/link";
import React from "react";
import CartButton from "../buttons/CartButton";

const FoodCard = ({ food }) => {
  const { title, foodImg, price, category,id } = food;

  return (
    <div className="border rounded-lg shadow-md p-4 hover:shadow-lg transition flex flex-col h-full">
      
      {/* Image */}
      <img
        src={foodImg}
        alt={title}
        className="w-full h-48 object-cover rounded-md"
      />

      {/* Content */}
      <div className="mt-3 flex flex-col flex-1">
        <h2 className="text-lg font-semibold line-clamp-2">
          {title}
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          {category}
        </p>

        <p className="text-xl font-bold mt-2">
          ৳ {price}
        </p>

        {/* Buttons (always bottom & same line) */}
        <div className="flex gap-3 mt-auto">
         <CartButton food={food}></CartButton>

          <Link href={`/foods/${id}`}
            className="flex-1 border border-green-600 text-green-600 py-2 rounded hover:bg-green-50 text-center"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
