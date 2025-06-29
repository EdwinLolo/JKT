import React from 'react';
import img11 from '../assets/images/Akhirnya Bebas Berekspresi 2.jpg';

const data = [
  {
    title: 'Akhirnya Bebas Berekspresi Meski Harus di Jalanan',
    content:
      'Waktu sudah menjelang sore hari. Erika, seorang transpuan berusia 45 tahun sedang bersiap mengamen keliling kampung seperti biasa untuk mencari nafkah. Tangannya sibuk membenarkan riasannya dan rambut palsunya. Erika merupakan lulusan SMK dengan pengalaman kerja di bidang marketing, menjadi sales promotion, bekerja di restoran, dan terakhir bekerja di konveksi. Namun, di balik banyaknya pengalaman itu, ada beban yang selalu dipikulnya yaitu harus menyembunyikan dirinya sendiri. Erika terpaksa mengenakan pakaian laki-laki di rumah dan tempat kerjanya, dan hanya bisa memakai pakaian perempuan saat mengamen.<br /><br />' +
      '"Kami lebih nyaman berpakaian laki (di tempat kerja) karena di perusahaan itu tidak membutuhkan kaum waria," ujar Erika. Bahkan, hingga detik ini, di lingkungan rumahnya, Erika masih harus berpakaian sebagai laki-laki. Rasa takut tidak diterima jika menunjukkan jati dirinya membuat ia menahan diri selama bertahun-tahun.<br /><br />' +
      'Erika awalnya mengamen untuk menambah penghasilan sehari-hari karena statusnya di konveksi bukan karyawan tetap. Ia hanya bekerja jika ada panggilan. Namun, karena tidak nyaman akhirnya Erika memutuskan keluar dari konveksi dan memutuskan untuk mengamen saja. Mengamen bagi Erika bukan semata-mata mencari uang saja, melainkan juga menjadi tempat untuk berekspresi karena hanya saat mengamen lah Erika bisa berdandan dan merasa nyaman menjadi diri sendiri.<br /><br />',
  },

  {
    content:
      'Setiap hari, Erika membawa alat makeup dan music box / speaker miliknya yang ia beli sendiri agar tidak perlu membayar setoran harian. Meskipun hasil dari mengamen tidak banyak dan ada stigma yang melekat, Erika tetap menikmati profesinya karena dapat menjadi diri sendiri di jalanan. Ketika masih bekerja dengan orang lain, penghasilannya sekitar 3 – 4 juta rupiah per bulannya. Kini, Erika hanya bisa mendapatkan paling banyak 100 ribu rupiah per hari saat mengamen, dan itu pun tidak selalu dapat banyak. Kalau hujan, sakit, atau music box rusak, Erika terpaksa tidak bisa mengamen sehingga penghasilan Erika cenderung sedikit. <br /><br />' +
      'Selama mengamen, Erika dan kawan-kawannya pernah mendapatkan perlakuan tidak enak dari masyarakat. Ejekan dan hinaan, difoto diam-diam di KRL saat hendak menuju lokasi mengamen, sempat diludahi, dan bahkan ketika orang lewat dengan motor ada yang sengaja membuang air ke arahnya. Tidak hanya itu, Erika juga punya pengalaman menyakitkan ketika seorang pria ingin berhubungan intim dengannya tetapi, Erika menolaknya. Saat ditolak, pria itu justru menuduhnya mencuri uang. “Itu lelaki pengen, maaf, pengen main (berhubungan intim) dengan aku tapi aku tolak, lalu dia menyangkal aku menyolong duitnya. Dituduh ngambil duit dari kantong dia,” cerita Erika.<br /><br />' +
      'Meskipun kehidupan sulit, Erika tidak berhenti berharap. "Untuk sekarang ini, sedang enjoy dengan ngamen. Tapi, kalau memang ada pekerjaan yang lebih baik, kami pun juga pengen kerja. Ya, kalau memang punya modal, kami pengen buka usaha warung kecil-kecilan." Erika merasa modal materi adalah hal yang paling dibutuhkan saat ini untuk bisa membuka warung karena sulit baginya mendaftar pekerjaan dengan latar belakang pendidikan sebatas SMK. "Yang pertama ya modal, sekarang masuk kerja pun juga enggak semudah kayak dulu menaruh ijazah, diterima. Sekarang enggak begitu. Kadang-kadang mereka, kita keluar modal dulu baru kita diterima." Proses melamar kerja formal dengan modal ijazah dirasanya seperti "faktor keberuntungan," sementara "kalau kita melamar dengan pakai sogokan itu lebih cepat."<br /><br />',
    image: img11,
    video: 'https://www.youtube.com/embed/EIjyU3LhmB4',
  },
  {
    content:
      'Sebelum menutup perbincangan kami sore itu, Erika menyampaikan harapannya agar masyarakat bisa teredukasi bahwa transpuan juga punya keterampilan dan jangan hanya melihat buruknya saja. Erika juga bercerita bahwa selama ini transpuan sering kali dinilai membawa malapetaka, menularkan penyakit, seks bebas. "Waria itu sebenarnya jauh dari bayangan kalian ' +
      'bahwa itu jelek gitu loh. Kalau pengen tahu, mereka punya keahlian, punya kelebihan tersendiri. Jangan dinilai bahwa waria itu hanya gonta-ganti lelaki, seks bebas."<br /><br />' +
      'Erika juga berpesan agar kawan-kawan transpuan pantang menyerah. "Yang penting jangan putus asa, jangan menyerah. Terus berusaha dan berdoa. Kalau tidak berusaha dan berdoa, hanya nangkring di tempat, Tuhan pun tidak akan bantu. Pekerjaan pun juga tidak akan datang sendirinya," tutup Erika pada perbincangan kami sore itu untuk lanjut mengamen.<br />',
  },
];

const FreedomPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center position-relative z-index-99">
      <div
        className="bg-white max-w-6xl w-full p-6 rounded-xl shadow-md bg-no-repeat bg-left bg-[length:250px_auto]"
        style={{
          backgroundImage: "url('/images/ILUSTRASI 7.3.png')",
          backgroundPosition: 'left 100px ',
        }}
      >
        {data.map((item, index) => (
          <div key={index} className="space-y-3">
            {index !== 1 && (
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
                className="flex flex-col md:flex-row gap-6 items-start bg-no-repeat bg-left bg-[length:250px_auto]"
                style={{
                  backgroundImage: "url('/images/ILUSTRASI 7.1.png')",
                  backgroundPosition: 'left 800px ',
                }}
              >
                <div
                  className="flex-1 text-justify"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
                <div className="flex flex-col items-center gap-4 md:w-1/2">
                  <img
                    className="rounded-md object-cover h-75"
                    src={item.image}
                    alt="Image error"
                  />
                  <p className="text-xs text-center mt-2 text-gray-600 italic">
                    Music Box  yang biasa dipakai Erika
                    <br />
                    untuk mengamen. (09/05/2025).
                    <br />
                    Foto: Grace Vilia
                  </p>
                  <iframe
                    width="100%"
                    height="700"
                    src={item.video}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="rounded-md"
                  ></iframe>
                  <p className="text-xs text-center mt-2 text-gray-600 italic">
                    Erika saat sedang
                    <br />
                    mengamen. (09/05/2025).
                    <br />
                    Video: Grace Vilia
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

export default FreedomPage;
