import React from 'react';

const Blog = () => {
  const posts = [
    { title: 'مقال 1', img: '/assets/blog1.jpg', desc: 'وصف المقال الأول.' },
    { title: 'مقال 2', img: '/assets/blog2.jpg', desc: 'وصف المقال الثاني.' },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="section-title text-center">المدونة</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <img src={post.img} alt={post.title} className="w-full h-40 object-cover rounded mb-4" />
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p>{post.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;