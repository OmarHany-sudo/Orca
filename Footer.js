import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <h3 className="text-xl font-bold mb-4">Orca Tech</h3>
        <ul className="flex justify-center space-x-6 mb-4">
          <li><Link to="/" className="hover:underline">الرئيسية</Link></li>
          <li><Link to="/about" className="hover:underline">من نحن</Link></li>
          <li><Link to="/services" className="hover:underline">الخدمات</Link></li>
          <li><Link to="/contact" className="hover:underline">اتصل بنا</Link></li>
        </ul>
        <p>&copy; 2025 Orca Tech. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
};

export default Footer;