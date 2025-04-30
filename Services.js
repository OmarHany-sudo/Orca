import React from 'react';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const services = [
    { title: 'تطوير مواقع', img: '/assets/web-dev.jpg', desc: 'نصمم مواقع احترافية.' },
    { title: 'تجارة إلكترونية', img: '/assets/ecommerce.jpg', desc: 'حلول متاجر إلكترونية.' },
    { title: 'SEO', img: '/assets/seo.jpg', desc: 'تحسين محركات البحث.' },
    { title: 'UI/UX', img: '/assets/uiux.jpg', desc: 'تصميم واجهات مستخدم.' },
    { title: 'استضافة', img: '/assets/hosting.jpg', desc: 'خدمات استضافة مواقع.' },
  ];

  return (
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
  );
};

export default Services;