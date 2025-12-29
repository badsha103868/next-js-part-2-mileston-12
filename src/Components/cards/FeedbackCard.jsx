// "use client";

import { Pencil, Trash2, Clock } from "lucide-react";
import { formatDistanceToNow, format } from "date-fns";

const FeedbackCard = ({ feedback, onUpdate, onDelete }) => {
  const { _id, message, date } = feedback;
  const parsedDate = new Date(date);
  return (
    <div className=" md:flex justify-between items-center  w-full bg-gray-100  rounded-xl p-5 shadow-sm hover:shadow-md transition">
      <div>
        {/* Message */}
        <p className="text-gray-800 text-base font-medium mb-3">{message}</p>

        {/* Relative Time */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <Clock size={16} />
          <span>
            {format(parsedDate, "dd MMM yyyy, hh:mm a")}
            <span className="mx-2">·</span>
            {formatDistanceToNow(parsedDate, { addSuffix: true })}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <button
          // onClick={() => onUpdate(_id)}
          className="flex items-center justify-center gap-2 flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-2 rounded-lg"
        >
          <Pencil size={18} />
          Update
        </button>

        <button
          // onClick={() => onDelete(_id)}
          className="flex items-center justify-center gap-2 flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-2 rounded-lg"
        >
          <Trash2 size={18} />
          Delete
        </button>
      </div>
    </div>
  );
};

export default FeedbackCard;
