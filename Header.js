import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/">Orca Tech</Link>
        </h1>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:underline">الرئيسية</Link></li>
            <li><Link to="/about" className="hover:underline">من نحن</Link></li>
            <li><Link to="/services" className="hover:underline">الخدمات</Link></li>
            <li><Link to="/portfolio" className="hover:underline">أعمالنا</Link></li>
            <li><Link to="/blog" className="hover:underline">المدونة</Link></li>
            <li><Link to="/faq" className="hover:underline">الأسئلة الشائعة</Link></li>
            <li><Link to="/contact" className="hover:underline">اتصل بنا</Link></li>
            <li><Link to="/quote" className="btn-primary">طلب عرض سعر</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;