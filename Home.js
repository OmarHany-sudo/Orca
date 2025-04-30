import React from 'react';
import Slider from '../components/Slider';
import ServiceCard from '../components/ServiceCard';
import PortfolioCard from '../components/PortfolioCard';
import TestimonialCard from '../components/TestimonialCard';

const Home = () => {
  const services = [
    { title: 'تطوير مواقع', img: '/assets/web-dev.jpg', desc: 'نصمم مواقع احترافية.' },
    { title: 'تجارة إلكترونية', img: '/assets/ecommerce.jpg', desc: 'حلول متاجر إلكترونية.' },
    { title: 'SEO', img: '/assets/seo.jpg', desc: 'تحسين محركات البحث.' },
  ];

  const projects = [
    { title: 'مشروع 1', img: '/assets/project1.jpg', desc: 'وصف المشروع الأول.' },
    { title: 'مشروع 2', img: '/assets/project2.jpg', desc: 'وصف المشروع الثاني.' },
  ];

  const testimonials = [
    { name: 'عميل 1', text: 'خدمة ممتازة!', img: '/assets/team-member.jpg' },
    { name: 'عميل 2', text: 'تجربة رائعة!', img: '/assets/team-member.jpg' },
  ];

  return (
    <div>
      <Slider />
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="section-title text-center">خدماتنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="section-title text-center">أعمالنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <PortfolioCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="section-title text-center">آراء العملاء</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;