import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Headline from '../components/Headline';

export default function HomePage() {
  return (
    <div>
      <main className="max-w-screen-xl mx-auto px-6 pt-12">
        <Headline />
      </main>
    </div>
  );
}
