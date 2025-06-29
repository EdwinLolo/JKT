import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';

import ConsideredWeirdPage from './ConsideredWeirdPage';
import DiscriminationPage from './DiscriminationPage';
import JobPage from './JobPage';
import BitterRealityPage from './BitterRealityPage';
import ExperiencePage from './ExperiencePage';
import FormalJobPage from './FormalJob';

const dataPages = [
  { pageNum: 1, pageComponent: ConsideredWeirdPage },
  { pageNum: 2, pageComponent: DiscriminationPage },
  { pageNum: 3, pageComponent: JobPage },
  { pageNum: 4, pageComponent: BitterRealityPage },
  { pageNum: 5, pageComponent: ExperiencePage },
  { pageNum: 6, pageComponent: FormalJobPage },
];

const DescriptionPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0); // -1 = back, 1 = next
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNext = () => {
    if (currentPage < dataPages.length - 1) {
      setDirection(1);
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setDirection(-1);
      setCurrentPage((prev) => prev - 1);
    } else {
      navigate('/');
    }
  };

  const CurrentComponent = dataPages[currentPage].pageComponent;

  return (
    <div className="relative p-6 overflow-hidden">
      <button
        onClick={handlePrev}
        className="absolute left-6 top-6 bg-pink-300 text-black font-bold rounded-full w-11 h-11 flex items-center justify-center shadow hover:bg-pink-400 transition"
      >
        <span className="text-3xl pb-1">←</span>
      </button>

      {/* Transisi halaman */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentPage}
          initial={{ x: direction > 0 ? 500 : -500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction > 0 ? -500 : 500, opacity: 0 }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
        >
          <CurrentComponent />
        </motion.div>
      </AnimatePresence>

      {/* Tombol Next */}
      <div className="flex justify-end mt-8">
        <button
          onClick={handleNext}
          disabled={currentPage === dataPages.length - 1}
          className={`bg-pink-300 text-black font-semibold py-2 px-6 rounded-full hover:bg-pink-400 transition ${
            currentPage === dataPages.length - 1 ? 'invisible' : ''
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DescriptionPage;
