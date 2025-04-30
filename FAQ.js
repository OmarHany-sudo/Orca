import React from 'react';
import FAQItem from '../components/FAQItem';

const FAQ = () => {
  const faqs = [
    { question: 'كيف يمكنني طلب خدمة؟', answer: 'يمكنك طلب خدمة من خلال صفحة طلب عرض السعر.' },
    { question: 'ما هي مدة تنفيذ المشروع؟', answer: 'تعتمد المدة على حجم المشروع، عادة من أسبوع إلى شهر.' },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="section-title text-center">الأسئلة الشائعة</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;