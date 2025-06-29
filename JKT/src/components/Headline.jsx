import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Headline = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 h-140 bg-cover bg-center bg-[url('/images/homeHeadline.png')]">
      {/* Text Section */}
      <div className="max-w-xl">
        <h1 className="text-4xl font-bold mb-2">SELALU DIANGGAP ANEH</h1>
        <h2 className="text-2xl font-medium text-gray-800 mb-4">
          Sulitnya Transgender Dapat Pekerjaan
        </h2>
        <p className="text-gray-700 mb-6">
          Aneh? Asusila? Tidak Normal? Tidak sehat secara rohani? Stigma-stigma
          yang merendahkan itu sering kali melekat pada seorang transgender.
          Padahal, di balik label itu, transgender juga memiliki hak yang sama
          dengan kita semua: hak untuk hidup layak, hak untuk berkarya, dan hak
          untuk memiliki pekerjaan yang layak.
        </p>
        <Link
          to="/description"
          className="bg-pink-300 text-black font-semibold py-2 px-6 rounded-full hover:bg-pink-400 transition flex items-center gap-2"
        >
          Read More <span className="text-lg">➤</span>
        </Link>
      </div>
    </div>
  );
};

export default Headline;
