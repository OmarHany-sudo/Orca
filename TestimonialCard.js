import React from 'react';

const TestimonialCard = ({ name, text, img }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
      <img src={img} alt={name} className="w-16 h-16 rounded-full mx-auto mb-4" />
      <p className="italic mb-2">"{text}"</p>
      <h4 className="font-bold">{name}</h4>
    </div>
  );
};

export default TestimonialCard;