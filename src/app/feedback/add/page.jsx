import { connect } from "@/lib/dbConnect";
import FeedbackForm from "@/Components/forms/FeedbackForm";
import React from "react";
import { postFeedback } from "@/action/server/feedback";

const AddFeedback = () => {
  // const postFeedback = async (message) => {
  //   "use server";
  //   const result = await connect("feedbacks").insertOne({
  //     message,
  //     date: new Date(),
  //   });
  //   return {
  //     ...result,
  //     insertedId: result.insertedId.toString(),
  //   };
  // };
  return (
    <div>
      <h2 className="text-2xl text-center py-3">AddFeedback</h2>
      <FeedbackForm postFeedback={postFeedback}></FeedbackForm>
    </div>
  );
};

export default AddFeedback;
