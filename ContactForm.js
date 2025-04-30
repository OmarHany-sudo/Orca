import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // هنا هتحتاج API لإرسال البيانات للـ Backend
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
      <input
        type="text"
        placeholder="الاسم"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="w-full p-2 border rounded"
      />
      <input
        type="email"
        placeholder="البريد الإلكتروني"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="w-full p-2 border rounded"
      />
      <textarea
        placeholder="رسالتك"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        className="w-full p-2 border rounded"
      />
      <button type="submit" className="btn-primary">إرسال</button>
    </form>
  );
};

export default ContactForm;