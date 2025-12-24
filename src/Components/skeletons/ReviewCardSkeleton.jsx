const ReviewSkeleton = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 max-w-xl mx-auto animate-pulse w-full">
      {/* User Info Section */}
      <div className="flex items-center gap-4 mb-4">
        {/* Profile Image Circle */}
        <div className="w-12 h-12 rounded-full bg-gray-300"></div>
        
        <div className="flex-1 space-y-2">
          {/* User Name Line */}
          <div className="h-4 w-32 bg-gray-300 rounded"></div>
          {/* Rating & Date Line */}
          <div className="h-3 w-40 bg-gray-200 rounded"></div>
        </div>
      </div>

      {/* Review Text Section */}
      <div className="space-y-2 mb-4">
        {/* Text lines match the 'leading-relaxed' feel */}
        <div className="h-3.5 bg-gray-200 rounded w-full"></div>
        <div className="h-3.5 bg-gray-200 rounded w-full"></div>
        <div className="h-3.5 bg-gray-200 rounded w-3/4"></div>
      </div>

      {/* Like Button Section */}
      <div className="h-9 w-24 bg-gray-200 rounded-full"></div>
    </div>
  );
};

export default ReviewSkeleton;