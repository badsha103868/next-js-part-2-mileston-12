const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="grid md:grid-cols-2 gap-10 bg-white shadow-lg rounded-xl p-6 w-full max-w-7xl animate-pulse">
        {/* Image Skeleton */}
        <div className="w-full h-[350px] bg-gray-300 rounded-lg" />

        {/* Details Skeleton */}
        <div className="space-y-4">
          {/* Title */}
          <div className="h-8 w-3/4 bg-gray-300 rounded"></div>
          
          {/* Category & Area */}
          <div className="h-5 w-1/2 bg-gray-300 rounded"></div>
          <div className="h-5 w-1/3 bg-gray-300 rounded"></div>

          {/* Price */}
          <div className="h-6 w-1/4 bg-gray-300 rounded"></div>

          {/* Buttons */}
          <div className="flex space-x-5 mt-6">
            <div className="flex-1 h-12 bg-gray-300 rounded-lg"></div>
            <div className="flex-1 h-12 bg-gray-300 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
