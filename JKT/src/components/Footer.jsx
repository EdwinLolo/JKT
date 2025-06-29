import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Grace Vilia',
    role: 'Producer/ Writer',
    bg: 'bg-sky-400',
    instagram: 'https://instagram.com/gracevilia',
    linkedin: 'https://www.linkedin.com/in/grace-vilia/',
  },
  {
    name: 'Sean Marcello',
    role: 'Programmer',
    bg: 'bg-white',
    instagram: 'https://instagram.com/seanmrcl',
    linkedin: 'https://www.linkedin.com/in/sean-marcello-talaar/',
  },
  {
    name: 'Michelle Laurensia',
    role: 'Designer',
    bg: 'bg-rose-400',
    instagram: 'https://instagram.com/chellauren',
    linkedin: 'https://www.linkedin.com/in/michelle-laurensia-id/',
  },
];

const Footer = () => {
  return (
    <div className="rounded-t-3xl p-8 bg-white max-w-screen-xl mx-auto shadow-[0_-10px_30px_-20px_rgba(0,0,0,0.75)]">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Kiri */}
        <div className="md:w-1/2">
          <h2 className="font-bold text-lg mb-2">JEJAK KARIER TRANS</h2>
          <p className="text-sm text-gray-700">
            Jejak Karier Trans adalah sebuah artikel interaktif yang membahas
            perjalanan karier Transgender, dibuat oleh mahasiswa Universitas
            Multimedia Nusantara pada tahun 2025.
          </p>
        </div>

        {/* Kanan */}
        <div className="flex flex-wrap gap-4 justify-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`rounded-xl shadow-md p-4 w-[150px] text-center whitespace-nowrap ${
                member.bg
              } ${member.bg === 'bg-white' ? 'border' : 'text-white'}`}
            >
              <h3 className="font-bold text-sm">{member.name}</h3>
              <p className="text-xs mb-2">{member.role}</p>
              <div className="flex justify-center gap-3">
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} Instagram`}
                >
                  <FaInstagram size={16} />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <FaLinkedin size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bawah */}
      <div className="text-center mt-6 text-xs text-gray-500">
        © 2025 by Jejak Karier Trans
      </div>
    </div>
  );
};

export default Footer;
