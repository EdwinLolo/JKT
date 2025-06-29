import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img27 from '../assets/images/Group 39.png';
import img28 from '../assets/images/Translaki dan Binder 4.jpeg';
import img29 from '../assets/images/Translaki dan Binder 7.jpg';
import img30 from '../assets/images/Translaki dan Binder 3.jpeg';
import img31 from '../assets/images/Translaki dan Binder 2.jpeg';

const data = [
  {
    title: 'Translaki dan Binder sebagai Jembatan Hidup Layak',
    content:
      'Tommy (36 tahun), seorang trans laki-laki, kini ia lebih nyaman menjalani hari-harinya sebagai wirausaha. Ia berjualan pisang dan binder (penekan dada) di Bogor. Mengapa memilih berjualan? "Capek kalau harus kerja di bawah kekuasaan orang lain dan peraturan-peraturan yang semakin tidak masuk akal," jawabnya. Ia juga pernah merasakan sendiri bagaimana pintu kesempatan tertutup bahkan sebelum melangkah masuk. "Ada beberapa kejadian, yang dari awal nih ya kalau misalkan dia penampilannya udah beda. Terus baru nyampe gitu, mau tanyain lowongan. Padahal di situ sudah jelas ada tulisan lowongan pekerjaan. Tapi, di saat lagi dia coba tanya sama security-nya, langsung dipatahkan kalau misalkan gak terima tomboy atau gimana. Jadi dari awal itu aja udah diskriminasi." Pengalaman pahit ini, yang ia rasakan sendiri dan juga dialami kawan-kawannya yang mendorongnya untuk mencari jalan lain.<br /><br />' +
      'Perjalanan Tommy menjadi pengusaha pisang terjadi tanpa disengaja. Awalnya, ia membantu menggantikan temannya menjaga toko pisang untuk beberapa hari. Ketika temannya ketahuan korupsi, kepercayaan pemilik toko pisang pun beralih sepenuhnya kepada Tommy. Berkat kinerjanya yang baik, pemilik toko pisang pun memberikan Tommy kesempatan untuk membuka toko pisang sendiri, dengan pasokan barang langsung dari si pemilik toko. Hal ini yang menjadi titik awal Tommy dalam berwirausaha.<br /><br />' +
      'Tak berhenti di situ, Tommy juga melihat kebutuhan krusial di sekitarnya, khususnya di kalangan buchi dan translaki yang sering menggunakan korset sebagai penekan dada dalam waktu lama. Karena korset tidak baik untuk kesehatan jika dipakai dalam waktu lama dan harga binder juga lumayan mahal, di atas Rp 150 ribu, serta berbekal pengalaman sebagai reseller binder sebelumnya, Tommy memutuskan untuk produksi binder sendiri dan menjualnya dengan harga yang jauh lebih terjangkau, mulai dari Rp 65 ribu di Shopee agar kawan-kawannya bisa beralih dari korset ke binder yang lebih aman.',
  },

  {
    image: img27,
    content:
      'Sebelum sepenuhnya berjualan, Tommy sempat bekerja di minimarket sebelum ia bertransisi, dan di pabrik pembuatan piring dan gelas khusus ekspor. Pada 2018, Tommy bertransisi saat masih bekerja di pabrik tersebut. Setelahnya, ia sempat bekerja di Tasikmalaya dan Pangandaran selama sekitar 2-3 tahun.<br /><br />' +
      'Setelah kembali dari Tasikmalaya dan Pangandaran, Tommy ingin mencoba daftar kerja di garmen. Namun, ia mendapatkan penolakan bahkan sebelum mencoba daftar. "Jadi, sebelum masuk, masih di gerbang, langsung to the point mereka bilang gak nerima yang tomboy. Jadi, belum sempat daftar," ceritanya.<br /><br />' +
      'Tak lama setelah itu, Tommy kembali ke pabrik piring dan gelas yang sama, tempat ia dulu bekerja. Saat itu, ia bisa langsung masuk tanpa proses panjang karena sudah punya paklaring (surat keterangan kerja) dan mengenal HRD-nya. Namun, ketika Pandemi Covid-19, Tommy di-PHK secara sepihak, meskipun kontraknya belum selesai. Pemutusan kontraknya bukan hanya karena Covid semata, tetapi juga karena identitasnya yang menjadi salah satu alasan tersembunyi.<br /><br />' +
      '"Itu salah satu alasannya, kepala bagian itu melihat aku lagi shalat tanpa mukena. Langsung dipanggil ke kantor. Ya, intinya disuruh pakai mukena dan aku tuh nggak mau. Mungkin dia nyari peluang gimana caranya buat keluarin aku. Nah, salah satunya itu pas lagi ada Covid yang pengurangan karyawan, aku masuk daftar. Padahal aku sebenarnya nggak ada di daftar karena absensiku tuh bersih, sebersih-bersihnya. Tiba-tiba nama aku langsung masuk daftar saja dan langsung dikeluarin."<br /><br />',
  },
  {
    image: [img28, img29, img30, img31],
  },
  {
    content:
      'Sejak saat itu, Tommy mantap untuk berwirausaha. Selama berjualan, identitas gendernya tidak pernah menjadi hambatan  bagi Tommy. Hal ini membuatnya merasa sangat nyaman dan menikmati pekerjaannya sekarang.<br /> <br />' +
      'Bagi Tommy, modal utama untuk berwirausaha bukanlah uang yang banyak, melainkan niat dan tempat. "Kalau aku tuh yang penting modal buat tempatnya aja. Karena barang itu kalau misalkan kita bisa bersosialisasi dengan baik, dapat barang itu gampang bahkan dari distributornya langsung juga bisa." Ia juga menekankan pentingnya niat dan konsistensi, serta kemampuan melihat peluang. "Lihat sekitar dulu, di sekitar itu apa yang dibutuhkan. Nah, di situ nanti akan kelihatan kita mau usaha apa. Karena kalau usaha, kalau kita nggak lihat sekitar, nggak lihat market, nggak akan jalan juga."<br /> <br />' +
      'Tommy juga berpesan untuk kawan-kawan transgender untuk tetaplah jadi diri sendiri. "Itu yang perlu dicatat sama kawan-kawan, kalau misalkan memang sudah tidak manusiawi ataupun sudah tidak bisa diterima, yah mendingan sudahi saja daripada sama-sama ego sama diri sendiri terus memaksakan yang akhirnya juga jadi berat menjalani hidup," tambahnya.<br /><br />',
    video: 'https://www.youtube.com/embed/nM6t3Cv-NRM',
  },
];

const BridgePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center position-relative z-index-99">
      <div
        className="bg-white max-w-6xl w-full p-6 rounded-xl shadow-md space-y-6 bg-no-repeat bg-left bg-[length:300px_auto]"
        style={{
          backgroundImage: "url('/images/ILUSTRASI 1O.1.png')",
          backgroundPosition: 'left 150px ',
        }}
      >
        {data.map((item, index) => (
          <div key={index} className="space-y-3">
            {/* Judul & Paragraf pembuka */}
            {index === 0 && (
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

            {/* Gambar tunggal di tengah + isi */}
            {index === 1 && (
              <div
                className="flex flex-col items-center gap-4 bg-no-repeat bg-left bg-[length:300px_auto]"
                style={{
                  backgroundImage: "url('/images/27.png')",
                  backgroundPosition: 'right 550px',
                }}
              >
                <img
                  className="max-w-lg w-full rounded-md center"
                  src={item.image}
                  alt={`Image error`}
                />
                <p className="text-xs text-center mt-2 text-gray-600 italic">
                  Binder yang dijual Tommy
                  <br />
                  Foto: Grace Vilia
                </p>
                <div
                  className="text-justify"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              </div>
            )}

            {/* Carousel gambar */}
            {index === 2 && (
              <div className="flex justify-center">
                <div className="max-w-md w-full">
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
                    Binder yang dijual Tommy dan mesin jahitnya.
                    <br />
                    Foto: Grace Vilia dan dokumentasi pribadi Tommy
                  </p>
                </div>
              </div>
            )}

            {/* Paragraf + video sebelah kanan */}
            {index === 3 && (
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Content sebelah kiri */}
                <div
                  className="flex-1 text-justify"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />

                {/* Video + Caption sebelah kanan */}
                <div className="flex flex-col items-center">
                  <iframe
                    className="rounded-md"
                    width="315"
                    height="560"
                    src={item.video}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                  <p className="text-xs text-center mt-2 text-gray-600 italic">
                    Binder yang dijual Tommy dan mesin jahitnya.
                    <br />
                    Video: Dokumentasi pribadi Tommy
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BridgePage;
