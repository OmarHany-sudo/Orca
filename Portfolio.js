import React from 'react';
import PortfolioCard from '../components/PortfolioCard';

const Portfolio = () => {
  const projects = [
    { title: 'مشروع 1', img: '/assets/project1.jpg', desc: 'وصف المشروع الأول.' },
    { title: 'مشروع 2', img: '/assets/project2.jpg', desc: 'وصف المشروع الثاني.' },
    { title: 'مشروع 3', img: '/assets/project3.jpg', desc: 'وصف المشروع الثالث.' },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="section-title text-center">أعمالنا</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <PortfolioCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;