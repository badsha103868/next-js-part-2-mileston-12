"use client";
import { useState } from "react";

const ReviewCard = ({ review }) => {
  const [likes, setLikes] = useState(review.likes.length);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-5 max-w-xl mx-auto">
      {/* User Info */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src={review.photo}
          alt={review.user}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-gray-800">{review.user}</h3>
          <p className="text-sm text-gray-500">
            ⭐ {review.rating} • {new Date(review.date).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Review Text */}
      <p className="text-gray-700 mb-4 leading-relaxed">
        {review.review}
      </p>

      {/* Like Button */}
      <button
        onClick={handleLike}
        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition
          ${liked ? "bg-red-100 text-red-600" : "bg-gray-100 text-gray-600"}
        `}
      >
        ❤️ {likes} Like
      </button>
    </div>
  );
};

export default ReviewCard;
