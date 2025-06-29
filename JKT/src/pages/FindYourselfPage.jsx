import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img17 from '../assets/images/Menemukan diri di balik seni 2.jpg';
import img18 from '../assets/images/Menemukan diri di balik seni 5.jpg';
import img19 from '../assets/images/Menemukan diri di balik seni 7.jpg';
import img20 from '../assets/images/Menemukan diri di balik seni 4.jpg';
import img21 from '../assets/images/Menemukan diri di balik seni 6.jpg';
import img22 from '../assets/images/Menemukan diri di balik seni 9.jpg';
import img23 from '../assets/images/Menemukan diri di balik seni 3.jpg';
import img24 from '../assets/images/Menemukan diri di balik seni.jpg';
import img25 from '../assets/images/Menemukan diri di balik seni 8.jpg';

const data = [
  {
    title: 'Menemukan Diri di Balik Seni',
    content:
      'Sore itu, di bawah derasnya hujan yang membasahi tanah Bogor, kami berbincang hangat sembari ditemani pisang aroma yang manis. Yayang, seorang transpuan berusia 43 tahun itu terus tersenyum hangat selama kami berbincang sore itu. Yayang merupakan seorang seniman. Ia menggeluti dunia lukis, makeup artist (makeup karakter, body and face painting, makeup sehari-hari dan pernikahan), dan kini sedang mencoba seni memahat sculpture. Awal perjalanan Yayang menuju dunia seni tidak mudah baginya, berawal dari sebuah trauma yang mendalam.<br /><br />' +
      'Ketika di bangku SMA, Yayang menjalin hubungan asmara dengan seorang laki-laki. Tidak ia sangka, kekasihnya, A merupakan seorang bandar narkoba yang kemudian menyeret Yayang mengenal obat-obatan terlarang. Selang 2 bulan setelah putus dengan A,  kabar duka datang dari A yang meninggal akibat overdosis. Yayang yang sempat kecanduan pun juga terguncang karena kejadian tersebut. Setelah itu, Yayang memilih untuk menjalani rehabilitasi secara mandiri di rumah. Ia tidak mau keluar dari rumah, Yayang mengurung dirinya sendiri di rumah karena ia tidak nyaman melihat orang berkerumun yang membuat Ibu Yayang pun khawatir. Sampai saat ini pun, Yayang masih trauma jika melihat kerumunan orang di tempat umum.',
  },

  {
    content:
      'Kekhawatiran dari keluarga Yayang, mendorong saudara Yayang untuk mengajaknya bergabung dengan kelompok teater sebagai upaya “healing” untuk Yayang agar kembali berinteraksi dengan orang sekitar dan tidak merasa sendirian lagi. <br /><br />' +
      'Pada saat berteater, benih-benih seni dalam diri Yayang mulai tumbuh. Ia mulai bermain peran, belajar olah vokal, menari, menata kostum, hingga belajar makeup. "Nah, mungkin dari situ jadi muncul gitu bahwa kayaknya aku seneng banget ya di dunia seni," kenangnya dengan mata berbinar.<br /><br />' +
      'Setelah belajar makeup, Yayang mencoba mendalami dunia makeup. Mulai dari makeup pengantin internasional, pengantin tradisional, makeup karakter, sampai belajar face and body painting. Tidak pernah ada kata puas untuk Yayang dalam hal belajar. Setelah belajar face and body painting, Yayang mulai belajar memahat dari clay dan kayu-kayu kecil. Setelah itu, Yayang menyadari bahwa dia punya kemampuan menggambar juga dan dia merasa seru dengan melukis sehingga membuatnya mencoba melukis dan mengembangkan lagi kemampuannya."',
    image: [img25, img17, img18, img19, img20],
  },
  {
    content:
      'Sebelum benar-benar menggeluti dunia seni, Yayang pernah bekerja di salon yang cukup besar dan juga di restoran. Namun, Yayang tidak menyukai pekerjaan itu sehingga memutuskan untuk berhenti. Sifat femininnya pun menjadi tantangan tersendiri dalam bekerja di restoran. "Ada (tantangan), terutama karena mungkin mereka melihat aku lah. Mungkin lebih feminin atau apa. Kalau untuk bekerja di dunia salon mungkin sudah terbiasa. Ketika di resto, itu beda ceritanya sih," jelasnya. Pengalaman di restoran meninggalkan kesan yang kurang baik.<br /><br />' +
      'Ketika bekerja di restoran, Yayang pernah mengalami pelecehan dari pelanggannya. "Aku pernah nganterin makanan, aku kasih ke customer dan customer-nya nyolek aku dengan bahasa "Hai, Say! Hai, Chin!" gitu. Sebetulnya kan padahal aku nggak ngapa-ngapain lah gitu. Aku secara profesional untuk menyediakan makanan gitu. Padahal aku tidak melakukan hal apapun ya," kenangnya. Tidak hanya digoda seperti itu, Yayang juga beberapa kali diajak berhubungan intim oleh pelanggannya. Pengalaman seperti ini menjadi salah satu pemicu baginya untuk mencari jalan lain.<br /><br />' +
      'Lepas dari lingkungan yang tidak nyaman itu, kini, harga lukisan Yayang yang tertinggi mencapai 5 juta rupiah, dengan proses pengerjaan sekitar 15 hari untuk satu lukisan. Saat bekerja menjadi makeup artist untuk selebriti, ia pernah dibayar antara 15-20 juta rupiah. Angka-angka ini bukan hanya soal materi, melainkan menjadi bukti dari ketekunan dan keberanian Yayang.',
  },
  {
    image: [img24, img21, img22, img23],
    content:
      'Sepanjang perbincangan kami sore itu, ada satu kalimat yang terus diucapkan Yayang seolah kalimat itu menjadi matra dalam hidupnya: “Just do it!” Yayang percaya bahwa kunci sukses adalah seberapa kita bisa menaklukan ketakutan itu. "Menurut aku ya, quotes di hidup itu ya, seberapa kamu berani menaklukkan ketakutan kamu untuk hal apapun." Baginya, "If you think you can, you can. If you think that is hard to do, its hard to do."<br /><br />' +
      'Yayang juga berpesan untuk dekatlah dengan orang yang lebih sukses karena itu yang akan mengubah mindset kita. Perubahan mindset ini ia alami setelah menonton sebuah akun YouTube yang menawarkan kelas. Ia mengikuti kelas tersebut dan bertemu seorang senior yang mengubah pandangannya terhadap dunia. Pertemuan singkat selama lima hari itu berhasil mengubah mindset Yayang dan membuatnya jadi berani melangkah.<br />',
  },
  {
    content:
      'Menutup percakapan kami sore itu, Yayang berharap kawan transpuan lainnya bisa memiliki keberanian untuk memulai apapun. Baginya, untuk memulai sesuatu tidak harus selalu berpatokan pada modal uang karena ' +
      'pasti akan ada jalannya, asal kita mau dan berani mencoba. Kisah Yayang menjadi bukti bahwa kita bisa mengukir kisah kita sendiri asal kita berani dan mau mencoba.',
  },
];

const FindYourselfPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center position-relative z-index-99">
      <div
        className="bg-white max-w-6xl w-full p-6 rounded-xl shadow-md space-y-6 bg-no-repeat bg-left bg-[length:300px_auto]"
        style={{
          backgroundImage: "url('/images/ILUSTRASI 8.2.png')",
          backgroundPosition: 'right top',
        }}
      >
        {data.map((item, index) => (
          <div key={index} className="space-y-3">
            {index !== 1 && index !== 3 && (
              <>
                {item.title && (
                  <div
                    className="text-xl font-semibold mb-10 text-center"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                )}
                <div
                  className="text-justify"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              </>
            )}

            {index === 1 && (
              <div
                className="flex flex-col md:flex-row gap-6 items-start bg-no-repeat bg-left bg-[length:300px_auto]"
                style={{
                  backgroundImage: "url('/images/ILUSTRASI 7.2 _ 8.1.png')",
                  backgroundPosition: 'left 275px ',
                }}
              >
                <div
                  className="flex-1 text-justify"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
                <div className="flex-shrink-0 md:w-1/3">
                  <Carousel
                    showThumbs={false}
                    showIndicators={false}
                    showStatus={false}
                    autoPlay
                    infiniteLoop
                    interval={4000}
                    className="rounded-md"
                  >
                    {item.image.map((img, imgIndex) => (
                      <img
                        key={imgIndex}
                        className="rounded-md"
                        src={img}
                        alt={`Image error`}
                      />
                    ))}
                  </Carousel>
                  <p className="text-xs text-center mt-2 text-gray-600 italic">
                    Yayang dengan karya seni dan
                    <br />
                    alat-alat seninya.
                    <br />
                    Foto: Dokumentasi pribadi Yayang
                  </p>
                </div>
              </div>
            )}

            {index === 3 && (
              <div
                className="flex flex-col md:flex-row gap-6 items-start bg-no-repeat bg-left bg-[length:300px_auto]"
                style={{
                  backgroundImage: "url('/images/ILUSTRASI 8.3.png')",
                  backgroundPosition: 'right top ',
                }}
              >
                <div className="flex-shrink-0 md:w-1/3">
                  <Carousel
                    showThumbs={false}
                    showIndicators={false}
                    showStatus={false}
                    autoPlay
                    infiniteLoop
                    interval={4000}
                    className="rounded-md"
                  >
                    {item.image.map((img, imgIndex) => (
                      <img
                        key={imgIndex}
                        className="rounded-md"
                        src={img}
                        alt={`Image error`}
                      />
                    ))}
                  </Carousel>
                  <p className="text-xs text-center mt-2 text-gray-600 italic">
                    Yayang dengan karya seni dan
                    <br />
                    alat-alat seninya.
                    <br />
                    Foto: Dokumentasi pribadi Yayang
                  </p>
                </div>
                <div
                  className="flex-1 text-justify"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindYourselfPage;
