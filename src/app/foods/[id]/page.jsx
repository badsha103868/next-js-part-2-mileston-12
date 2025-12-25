import Link from "next/link";
import React from "react";

// generate static params
export function generateStaticParams(){
  return [{id:"52898"},{id:"52755"},{id:"529555"}]
}

// meta data generate for food details page
export async function generateMetadata({ params }) {
  const { id } =await params;

  console.log("Metadata ID:", id); // 👉 Terminal এ দেখবে

  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
    { cache: "no-store" }
  );

  const data = await res.json();
  const details = data?.details || {};

  return {
    title: details.title || "Food Details",
    description: "Best Restaurant in Khulna",
  };
}
// export const metadata = {
//   title: "Foods Datails",
//   description: "Best Restaurant in Khulna",
// };


const getSingleFood = async (id) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`
  );
  const data = await res.json();

  // স্কেলিটন টেস্ট করার জন্য ৩ সেকেন্ড দেরি করানো হলো
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return data.details;
};

const page = async ({ params }) => {
  const { id } = await params;
  const food = await getSingleFood(id);

  // আগে চেক করবেন ফুড আছে কি না, তারপর ডিস্ট্রাকচার করবেন
  if (!food) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold">Food not Found</h2>
      </div>
    );
  }

  const { title, foodImg, price, category, area, video } = food;

  return (
    <div className="min-h-screen text-black max-w-7xl mx-auto flex items-center justify-center px-4">
      <div className=" py-2 md:py-10">
        <div className="grid md:grid-cols-2 gap-10 bg-white shadow-lg rounded-xl p-6">
          <div className="w-full h-[250px] md:h-[350px] rounded-lg overflow-hidden border border-gray-100">
            <img
              src={foodImg}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">{title}</h1>

            <p className="text-lg">
              <span className="font-semibold">Category:</span> {category}
            </p>

            <p className="text-lg">
              <span className="font-semibold">Area:</span> {area}
            </p>

            <p className="text-xl font-bold text-green-600">Price: ৳ {price}</p>

            <div className="flex space-x-5 mt-6">
              <a
                href={video}
                target="_blank"
               
                className="flex-1 bg-red-500 block py-3 hover:bg-green-400 rounded-lg text-center text-white"
              >
                Watch Video
              </a>

              <button className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition">
                🛒 Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
