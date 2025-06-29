import React, { useState } from 'react';
import FreedomPage from './FreedomPage';
import ConsideredWeirdPage from './ConsideredWeirdPage';
import img12 from '../assets/images/ILUSTRASI 7.1.png';
import img13 from '../assets/images/ILUSTRASI 8.3.png';
import img14 from '../assets/images/ILUSTRASI 9.1.png';
import img15 from '../assets/images/26.png';
import img16 from '../assets/images/ILUSTRASI 11.1.png';
import DiscriminationPage from './DiscriminationPage';
import FindYourselfPage from './FindYourselfPage';
import DecentLifePage from './DecentLifePage';
import BridgePage from './BridgePage';
import FilmmakerPage from './FilmmakerPage';

const dataPages = [
  {
    pageNum: 1,
    pageComponent: FreedomPage,
    logo: img12,
  },
  {
    pageNum: 2,
    pageComponent: FindYourselfPage,
    logo: img13,
  },
  {
    pageNum: 3,
    pageComponent: DecentLifePage,
    logo: img14,
  },
  {
    pageNum: 4,
    pageComponent: BridgePage,
    logo: img15,
  },
  {
    pageNum: 5,
    pageComponent: FilmmakerPage,
    logo: img16,
  },
];

const ExperiencePage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const CurrentComponent = dataPages[currentPage].pageComponent;

  const onClickTab = (index) => {
    setCurrentPage(index);
  };

  return (
    <div className="relative p-6 max-w-4xl mx-auto">
      <div className="text-center text-3xl font-semibold mb-10">
        <div>Bagaimana pengalaman mereka ketika </div>

        <div>mencari pekerjaan sampai bekerja?</div>
      </div>
      <div className="flex justify-center mb-[-20px] gap-4">
        {dataPages.map((item, index) => (
          <div
            key={index}
            onClick={() => onClickTab(index)}
            className={`flex-1 aspect-square ${
              currentPage !== index ? 'bg-gray-300' : 'bg-white'
            } rounded-t-3xl shadow-lg`}
          >
            <img
              className={`${
                currentPage !== index ? 'opacity-25' : 'opacity-100'
              } mx-auto h-40 w-40 pb-[20px]`}
              src={item.logo}
              alt={`Image error`}
            />
          </div>
        ))}
      </div>
      <CurrentComponent />
    </div>
  );
};

export default ExperiencePage;
