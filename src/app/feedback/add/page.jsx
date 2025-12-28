import FeedbackForm from '@/Components/forms/FeedbackForm';
import React from 'react';

const AddFeedback = () => {
  return (
    <div> 
      <h2 className='text-2xl text-center py-3'>AddFeedback</h2>
     <FeedbackForm></FeedbackForm>
    </div>
  );
};

export default AddFeedback;