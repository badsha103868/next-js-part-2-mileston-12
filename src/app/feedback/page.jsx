import FeedbackCard from "@/Components/cards/FeedbackCard";
import Link from "next/link";
import React from "react";

export const dynamic = "force-dynamic"; // static string, required by Next.js
export const metadata = { title: "feedbacks" };

const getFeedback = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_server}/api/feedback/`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error("Failed to fetch feedback");
  return res.json();
};

const FeedbackPage = async () => {
  const feedback = await getFeedback();

  return (
    <div>
      <h2 className="text-2xl font-bold">{feedback.length} Feedbacks Found</h2>
      <div className="my-5">
        <Link className="btn" href="/feedback/add">
          Add Feedback
        </Link>
      </div>
      <div className="my-3 space-y-5">
        {feedback.map((fd) => (
          <FeedbackCard key={fd._id} feedback={fd} />
        ))}
      </div>
    </div>
  );
};

export default FeedbackPage;
