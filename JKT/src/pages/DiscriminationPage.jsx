import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img3 from '../assets/images/HOME (3).png';
import img4 from '../assets/images/23.png';
import img5 from '../assets/images/image 2.png';

const data = [
  {
    title:
      'Diskriminasi Terstruktur yang Dihadapi <br />' +
      'Transgender Mengakses Pekerjaan Formal<br /><br />',
    image: img3,
    direction: 'right',
    content:
      '"Kalau dibandingin sama temen-temen cisgender, mereka peluang kesempatannya untuk nyoba ini itu lebih luas. Sedangkan kami, untuk nyoba ini itu pertimbangannya banyak banget,” keluh Retsu (31), seorang translaki ketika membahas sulitnya mendapatkan pekerjaan.</br /><br />' +
      'Bagi transgender di Indonesia, untuk sekadar mendapatkan pekerjaan saja sulit. Mereka harus bersaing dengan cisgender yang lebih diterima masyarakat dibandingkan transgender. Belum lagi akses terbatas yang dimiliki transgender untuk memperoleh pekerjaan. Apalagi pekerjaan layak? Rasanya jauh sekali untuk digapai.',
  },
  {
    content:
      '"Sekarang kami mau nggak mau harus berjuang mati-matian. Tapi, untuk dapat berjuang mati-matian itu, aksesnya ada nggak?” Lanjut Retsu. </br /><br />' +
      'Diskriminasi yang dirasakan transgender tidak hanya sebatas penerimaan dari masyarakat saja, melainkan ada juga diskriminasi terstruktur yang dihadapi dalam mengakses pekerjaan formal. Sekadar untuk memiliki dokumen identitas seperti KTP pun sering kali menjadi perjuangan yang melelahkan yang akhirnya membatasi akses jaminan sosial dan berbagai layanan dasar lainnya seperti layanan kesehatan, perbankan, pendidikan, pembuatan paspor dan SIM, bahkan untuk melamar kerja. </br /><br />' +
      'Berdasarkan survei yang dilakukan oleh Transmen Indonesia pada 2025, tidak semua translaki memiliki dokumen kependudukan. Dari 75 partisipan, masih ada 1 partisipan yang tidak memiliki KTP, 10 partisipan tidak memiliki Kartu Keluarga, dan 18 partisipan tidak memiliki akta kelahiran. </br /><br />' +
      'Punya KTP penting untuk membuat tabungan, pekerjaan, dan jaminan sosial. Ketiadaan KTP berdampak besar pada akses hak-hak Ekonomi, Sosial, dan Budaya (EKOSOB). Tanpa Kartu Keluarga atau Akta Kelahiran, akan kesulitan peroleh KTP baru atau perubahan data. Banyak transgender tak ber-KTP karena keluar rumah di bawah umur tanpa dokumen. Namun, ketika urus dokumen, dua dari tiga translaki alami diskriminasi seperti misgendering, deadnaming, pelecehan, atau penolakan. Dengan KTP, transgender bisa melamar pekerjaan dan dapat bantuan sosial. </br /><br />' +
      'Meskipun penting, masih banyak dari transpuan yang enggan mengurus KTP karena merasa skeptis. “Terus, kalau saya buat KTP saya mau ngapain? Toh, aku juga besok mati. Aku akan dapat apa? Kalau dapat bansos juga kita akan di-skip,” ucap Mia, Suara Kita saat mengulang kalimat yang sering diucap oleh sebagian transpuan ketika diajak membuat KTP. <br />',
  },
  {
    image: img4,
    direction: 'left',
    content:
      'Hal tersebut lah yang mendorong Focal Point Suara Kita untuk tetap mendorong kawan-kawan transgender untuk punya KTP. Upaya Focal Point agar kawan transgender memiliki KTP pun cukup memuaskan. Sebanyak 2000-an transgender sudah memiliki KTP berkat kerja keras Focal Point. </br /><br />' +
      '"Ayo kita punya KTP, kita bikin BPJS Kesehatan, BPJS ketenagakerjaan yang bukan penerima upah! Biar seenggaknya yang bukan penerima upah itu, ‘kan ada jaminan kematian, 10 juta. Setidaknya kita bisa nguburin diri kita dengan terhormat dengan 10 juta itu,” lanjut Mia mengajak kawan-kawan transgender membuat KTP. </br /><br />',
  },
  {
    image: img5,
  },
];

const DiscriminationPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
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
              {item.image && item.content ? (
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
                    className="h-100 w-125"
                    src={item.image}
                    data-aos="zoom-in"
                  />
                </div>
              ) : (
                <></>
              )}
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default DiscriminationPage;
