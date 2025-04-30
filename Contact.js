import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="section-title text-center">اتصل بنا</h2>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;