import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img6 from '../assets/images/image 4.png';
import img7 from '../assets/images/image 5.png';
import img8 from '../assets/images/image 3.png';
import img9 from '../assets/images/image 6.png';

const data = [
  {
    title: 'Transgender dan Pekerjaannya <br /><br />',
    content:
      'Terbentur urusan administrasi, akses pendidikan, sampai identitas gender, membuat transgender kesulitan mendapatkan pekerjaan yang layak sehingga memaksa banyak dari mereka bekerja di sektor informal yang cenderung berupah rendah, serta tidak memberikan jaminan sosial dan perlindungan hukum karena tidak membutuhkan CV, KTP, dan latar belakang pendidikan yang tinggi.',
  },
  {
    image: [img6, img7],
    imageDirection: 'column',
    direction: 'left',
    content:
      'Dari 75 partisipan dalam survei Transmen Indonesia 2025, lebih dari setengahnya bekerja informal, hanya 20% yang bekerja formal, sisanya sedang tidak bekerja. Pekerjaan yang dilakukan bervariasi, ada 38 jenis pekerjaan yang dituliskan oleh partisipan. Pekerjaan yang umum dilakukan adalah wirausaha (8 orang), driver ojek online (6 orang), freelance (5 orang), Staf NGO (4 orang), pekerja serabutan (4 orang), karyawan swasta (3 orang), kurir ekspedisi (3 orang), dan buruh harian (3 orang).<br /><br />' +
      'Meskipun sama-sama banyak yang bekerja informal, pekerjaan yang umum dilakukan oleh transpuan berbeda dengan translaki. Seperti yang sering kita jumpai, dari 460 transpuan, banyak dari transpuan yang bekerja di salon, pekerja seks, atau pedagang kaki lima dan pengamen (disebut wirausaha dalam laporan). Banyak transgender terpaksa bekerja di sektor informal karena sering kali kemampuan dan potensinya terabaikan.<br /><br />' +
      'Jenis pekerjaannya pun tentu memengaruhi penghasilan bulanannya. Sebanyak 80% dari 75 partisipan Transmen Indonesia dan 73,7% dari 460 partisipan transpuan berpenghasilan 3 juta ke bawah yang menurut kategori Bank Dunia termasuk dalam golongan rawan miskin hingga sangat miskin.<br /><br />',
  },
  {
    content:
      'Dari 460 partisipan transpuan, wirausaha, pekerja seks, dan penata rias/rambut adalah pekerjaan yang paling umum. Banyak transgender bekerja di sektor informal karena sering kali kemampuan dan potensinya terabaikan sehingga banyak yang terpaksa memilih pekerjaan seperti pekerja seks, pekerja salon, atau pedagang kaki lima dan pengamen (disebut wirausaha dalam laporan) untuk memenuhi kebutuhan hidup. Jenis pekerjaannya pun tentu memengaruhi penghasilan rata-rata transpuan.<br /><br />' +
      'Tidak jauh berbeda dengan penghasilan translaki, sebanyak 56,3% dari 460 transpuan memiliki pendapatan berkisar antara Rp 1.000.000 – Rp 3.000.000. Sedangkan, sekitar 17,4% dari mereka memiliki pendapatan rata-rata di bawah Rp 1.000.000. Kemudian, untuk kategori Rp 5.000.001 – Rp 8.000.000 dan Lebih dari Rp 10.000.000, jumlah datanya adalah 0. Pendapatan rendah transgender dapat dikaitkan dengan beberapa faktor, yang paling umum adalah pengecualian mereka dari peluang kerja formal dan kurangnya akses terhadap pendidikan. Faktor-faktor ini secara khusus memperburuk tingkat kemiskinan di kalangan transgender.<br /><br />',
  },
  {
    image: [img8, img9],
    imageDirection: 'row',
  },
];

const JobPage = () => {
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

            <div className="flex flex-row">
              {!Array.isArray(item.image) ? (
                item.image && item.content ? (
                  item.direction === 'left' ? (
                    <>
                      <img
                        className="h-75 w-100"
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
                        className="h-75 w-100"
                        src={item.image}
                        data-aos="zoom-in"
                      />
                    </>
                  )
                ) : !item.image && item.content ? (
                  <div
                    className="text-base text-gray-700 space-y-4 w-200"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                ) : item.image && !item.content ? (
                  <div className="justify-center">
                    <img
                      className="h-150 w-150"
                      src={item.image}
                      data-aos="zoom-in"
                    />
                  </div>
                ) : (
                  <></>
                )
              ) : item.imageDirection === 'column' ? (
                <div className="flex flex-row">
                  <div className="flex flex-col">
                    {item.image.map((img, imgIndex) => (
                      <img
                        key={imgIndex}
                        className="h-75 w-100 mb-4"
                        src={img}
                        alt={`Image ${imgIndex + 1}`}
                        data-aos="zoom-in"
                      />
                    ))}
                  </div>
                  <div
                    className="text-base text-gray-700 space-y-4 w-100"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                </div>
              ) : (
                <>
                  <div className="flex flex-row">
                    {item.image.map((img, imgIndex) => (
                      <img
                        key={imgIndex}
                        className="h-75 w-100 mr-4"
                        src={img}
                        alt={`Image ${imgIndex + 1}`}
                        data-aos="zoom-in"
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default JobPage;
