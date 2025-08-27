import React from 'react';
import { Star, Verified } from 'lucide-react';

const ReviewsCard = ({ review }) => {
  if (!review) return null;

  return (
    <div className='bg-white p-4 rounded-xl shadow-md'>
      <div className='flex items-center justify-between mb-2'>
        <div>
          <span className='font-semibold font-[roboto] text-gray-800'>{review.name}</span>
          <p className='text-sm text-gray-500'>{review.time}</p>
        </div>
        {review.verified && (
          <Verified className='w-5 h-5 text-green-600' />
        )}
      </div>

      <p className=' font-mono text-amber-600 mb-3'>{review.text}</p>

      <div className='flex'>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < review.rating
                ? 'text-green-600 fill-green-600'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewsCard;