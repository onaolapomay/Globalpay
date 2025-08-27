import React from 'react';
import { Star } from 'lucide-react';
import ReviewsCard from './ReviewsCard';
import ReviewsData from '../ReviewsData';

const Reviews = () => {
  return (
    <section className='bg-gray-50 py-10'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex flex-wrap justify-center  mb-8'>
          <div className='text-center space-x-4'>
            <div className='text-center sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-[roboto] text-gray-700 tracking-wider'>What Our Clients Are Saying</div>
            <h2 className='text-2xl font-bold text-gray-800'>Excellent</h2>
            <div className='flex justify-center space-x-2'>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className='w-6 h-6  bg-green-500 text-white fill-white' />
              ))}
            </div>
            <p className='text-gray-600 text-sm'>
              Rated 4.8 / 5 based on 4,321 reviews
            </p>
          </div>
        </div>

        <div className='overflow-x-auto pb-4'>
  <div className='grid grid-cols-4 gap-6 min-w-[1200px]'>
    {ReviewsData.map((review) => (
      <div key={review.id}>
        <ReviewsCard review={review} />
      </div>
    ))}
  </div>
</div>
      </div>
    </section>
  );
};

export default Reviews;