import React from 'react';
import QuoteForm from '../components/QuoteForm';

const Quote = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="section-title text-center">طلب عرض سعر</h2>
        <QuoteForm />
      </div>
    </section>
  );
};

export default Quote;