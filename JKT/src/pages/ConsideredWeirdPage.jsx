import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from '../assets/images/ILUSTRASI 2.png';
import img2 from '../assets/images/Untitled_Artwork (50) 1.png';

const data = [
  {
    title:
      'Selalu Dianggap Aneh: <br />' +
      'Sulitnya Transgender Dapat Pekerjaan <br /><br />',
    image: img1,
    direction: 'left',
    content:
      'Stigma orang sih. Menurutku, keberadaan mereka (transgender) belum tentu diterima sama sosial. Jadi, itu masih aneh dan janggal. Satu sisi, mungkin karena jumlah mereka masih minoritas, terus ya aneh gitu. Jadi, stigma orang udah jelek sih tentang orang-orang seperti ini (transgender),” ucap M (38), seorang HR di salah satu perusahaan ritel di Jakarta.<br /><br />' +
      'Aneh? Asusila? Tidak Normal? Tidak sehat secara rohani? Stigma-stigma yang merendahkan itu sering kali melekat pada seorang transgender. Padahal, di balik label itu, transgender juga memiliki hak yang sama dengan kita semua: hak untuk hidup layak, hak untuk berkarya, dan hak untuk memiliki pekerjaan yang layak.',
  },
  {
    title: 'Akan tetapi, apa itu pekerjaan layak bagi transgender?:',
    subtitle: 'Apakah pekerjaan saat ini sudah dapat dikatakan layak?',
    image: img2,
    direction: 'right',
    content:
      'Pekerjaan layak adalah fondasi utama pemberantasan kemiskinan. Menurut BPS, hal ini mencakup hak atas pekerjaan produktif, pengembangan diri, pendapatan adil dan layak, keamanan kerja, perlindungan sosial bagi pekerja dan keluarganya, serta kebebasan berpendapat, berorganisasi, dan berpartisipasi dalam pengambilan keputusan yang memengaruhi kehidupan mereka.<br /><br />' +
      'Melihat makna pekerjaan layak lebih dalam bagi transgender, pekerjaan layak idealnya mampu memberikan upah yang sesuai dengan beban kerja yang diberikan, tidak diskriminatif, ada keseimbangan antara kehidupan pribadi dan pekerjaan, ada apresiasi dan saling menghormati, ada kesempatan untuk bertumbuh dan berkembang sesuai keterampilannya, lingkungan kerja yang suportif, memiliki kontrak yang jelas, dan perusahaan atau pemberi kerja tidak memanipulasi.',
  },
];

const ConsideredWeirdPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        {data.map((item, index) => (
          <>
            <div
              key={index}
              className="text-2xl font-bold mb-4 text-center"
              dangerouslySetInnerHTML={{ __html: item.title }}
            />
            {item.subtitle && (
              <p className="text-xl font-semibold mb-2">{item.subtitle}</p>
            )}
            <div className="flex flex-row">
              {item.direction === 'left' ? (
                <>
                  <img
                    className="h-100 w-100"
                    src={item.image}
                    data-aos="zoom-in"
                  />
                  <div
                    className="text-base text-gray-700 space-y-4 w-100"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                </>
              ) : (
                <>
                  <div
                    className="text-base text-gray-700 space-y-4 w-100"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                  <img
                    className="h-100 w-100"
                    src={item.image}
                    data-aos="zoom-in"
                  />
                </>
              )}
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default ConsideredWeirdPage;
