import React from 'react';

const PortfolioCard = ({ title, img, desc }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
      <img src={img} alt={title} className="w-full h-40 object-cover rounded mb-4" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default PortfolioCard;