import React from 'react';
import { Link } from 'react-router-dom';
import img44 from '../assets/images/jejak karir trans-04.png';

const data = {
  image: img44,
};

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md py-7 px-7 rounded-b-4xl max-w-screen-xl mx-auto flex items-center justify-between">
      {/* Kiri */}
      <div className="font-bold text-sm">JEJAK KARIER TRANS</div>

      {/* Tengah */}
      <div className="absolute left-1/2 transform -translate-x-1/2 font-extrabold text-2xl">
        <img src={data.image} alt="logo" className="h-10 object-contain" />
      </div>

      {/* Kanan */}
      <div className="space-x-6 text-sm">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/terminology" className="hover:underline">
          Daftar Istilah
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
