import React from 'react';
import { Link } from 'react-router-dom';
import img37 from '../assets/images/Untitled_Artwork (51) 1.png';
import img38 from '../assets/images/27.png';
import img39 from '../assets/images/25.png';

const data = [
  {
    title:
      'Mengapa Transgender Hampir Tidak  <br />' +
      'Pernah Ditemukan di Pekerjaan Formal?<br /><br />',
    content:
      '"Stigma orang sih. Menurutku, keberadaan mereka (transgender) belum tentu diterima sama sosial. Jadi, itu masih aneh dan janggal," ucap M (38), seorang HR di salah satu perusahaan multisektor di Jakarta, membuka percakapan. "Satu sisi, mungkin karena jumlah mereka masih minoritas terus ya aneh gitu. Jadi stigma orang udah jelek sih tentang orang-orang seperti ini (transgender)."',
  },
  {
    content:
      'M, sebagai HR yang sudah berpengalaman bertahun-tahun mengakui bahwa ia belum pernah secara langsung merekrut pelamar transgender. Dugaannya adalah bisa karena proses penyortiran awal yang sudah langsung mengeliminasi, atau memang tidak ada transgender yang mendaftar. Bagi sebagian besar perusahaan di sektor formal, ada ketakutan akan pandangan publik. "Bagaimanapun kalau kerja di sektor formal, kan pasti ada customer-nya kan. Contoh, di sektor hospital, yang mempekerjakan kayak gitu (transgender), citra kita jelek. Citranya company itu jelek. Image-nya company as professional, mempercayakan nyawa gitu ya, masuk kayak gitu (transgender), biasanya langsung orang menolak, ya itu stigma sih. Stigma orang jelek soalnya, sudah melekat," jelas M.',
    image: img37,
    direction: 'right',
  },
  {
    content:
      'Selaras dengan pendapat M, Mia dari SuaraKita, sebuah perkumpulan yang mengadvokasi keberagaman gender juga menyatakan tentang image perusahaan yang dijaga. "Jadi dia tahu teman ini tuh punya kemampuan yang cukup tapi, dia nggak mau karena dia nggak mau ada LGBT di dalam kantornya dengan dua alasan. Yang pertama bisa jadi karena isu moralnya dia. Kedua, dia takut kantornya jadi sasaran tembaknya publik karena mempekerjakan LGBT," jelas Mia tentang ketakutan perusahaan.</br><br />' +
      'Dalam proses rekrutmen, identitas gender, penampilan, atau kesesuaian data dengan KTP, sangat memengaruhi keputusan akhir. Meskipun seorang pelamar transgender memenuhi semua kualifikasi, seringkali mereka tetap menjadi pilihan terakhir. "Kalau mungkin udah nggak ada lagi pelamar yang lain, mungkin (bisa diterima). Tapi, kan itu jarang banget, ya. Jadi, ya kayak, ya udah, (transgender) nanti dulu deh, gitu. Kecuali dia punya keahlian khusus banget, yang sulit," tambah M. Untuk posisi pekerjaan umum seperti administrasi, yang kandidatnya banyak, transgender cenderung tidak menjadi pilihan.',
  },
  {
    image: img38,
    direction: 'left',
    content:
      'Mia pun juga memberikan perspektif lebih dalam. Menurutnya, ada dua alasan mengapa transgender jarang terlihat di sektor formal. Pertama, adanya "self stigma" atau stigma dari individu transgender itu sendiri. Banyak yang sudah yakin tidak akan diterima karena merasa tidak berpendidikan (karena keluar rumah/putus sekolah dari muda) atau merasa tidak punya kemampuan apapun. Kemungkinan kedua, ada yang memang sudah mencoba melamar, tetapi ditolak secara terang-terangan ataupun tidak langsung. Penolakan tidak langsung ini lebih banyak terjadi misalnya, wawancara yang dipersulit, dibuat goals yang tidak realistis, atau lingkungan yang tidak nyaman hingga transgender tersebut enggan melanjutkan prosesnya.',
  },
  {
    content:
      'Bagi mia, masalah yang lebih utama bukan sekadar diterima atau tidak, melainkan juga soal kesiapan dari perusahaan, lingkungan kerja, dan calon pekerja itu sendiri. "Kalau dia menerima, apakah di dalam itu sudah siap semua orang untuk menerima pekerjaan yang LGBT. Itu menurut aku dan kawan-kawan juga ya. Itu adalah masalah yang lebih berat daripada diterima atau nggak diterima."',
  },

  {
    content:
      'Isu penggunaan toilet, sholat, atau interaksi sehari-hari bisa menjadi sumber ketidaknyamanan bagi transgender apabila dari lingkungan kerja juga tidak siap untuk menerima. "Jadi, PR yang saat sudah masuk ini sebenarnya lebih banyak daripada yang diterima atau nggak diterima. Itu yang bikin juga kawan-kawan jadi akhirnya sulit,” tegas Mia. "Sulitnya adalah pas di dalamnya (lingkungan pekerjaan) ini ya karena mereka nggak tahan."</br /><br />' +
      'Mia juga mengamati bahwa perusahaan yang berslogan inklusi sekalipun, seringkali hanya mengimplementasikannya sebatas terbuka pada disabilitas. "Slogan inklusi itu selalu sebenarnya kalau kamu perhatikan ya, mentoknya tuh adalah di disabilitas. Begitu dia ngomongin ragam gender, entar dulu nih, nggak mau dong kita. Karena itu, moral lagi." Padahal, inklusi yang seharusnya bukan hanya menerima, tetapi juga menyiapkan sarana-prasarana dan menjamin tidak ada diskriminasi di dalamnya, bukan sekadar tokenisme.',
    image: img39,
    direction: 'right',
  },
  {
    content:
      'Menurut Mia, perbedaan nilai moral yang menjadi akar dari penyebab orang langsung menolak bahkan sebelum melihat potensi seorang transgender karena nilai yang seringkali diyakini masyarakat adalah LGBT adalah perbuatan asusila dan tidak bermoral. “Hambatan transgender dalam mencari pekerjaan itu sebenarnya kalau ditarik itu adalah nilai. Orang memakai nilai moralnya untuk apapun dan nilai moral itu hanya dilekatkan pada soal apakah kamu memenuhi standar moral publik atau enggak seperti kalau kamu perempuan ya harus feminim,” tegas Mia. Selain nilai, kelengkapan dokumen identitas juga menjadi salah satu hambatan sistemik lainnya dalam mengakses pekerjaan.<br /><br />' +
      'Hasil temuan dari survei SuaraKita menunjukkan bahwa bukan hanya soal identitas gender yang menjadi tantangan melainkan juga ada faktor umur dan pendidikan yang juga memengaruhi. Banyak juga dari mereka yang ingin bekerja dan belajar tetapi, aksesnya terbatas. Melihat kebutuhan kawan-kawan transgender, SuaraKita berupaya menjembatani dan menyiapkan kawan transgender agar siap menghadapi dunia kerja formal. SuaraKita mempersiapkan kawan transgender dari hal yang paling mendasar:<br /><br />' +
      '<ul style="list-style-type: disc; padding-left: 1.25rem;">' +
      '<li>Pembuatan CV dan Wawancara: Pelatihan untuk membuat CV yang "aman" dan cara menghadapi pertanyaan wawancara yang seringkali pribadi dan tidak relevan.</li>' +
      '<li>Komunikasi dan Etika Profesional: Mengajarkan cara membalas pesan secara formal dan bersikap profesional.</li>' +
      '<li>Pelatihan Safe and Security</li>' +
      '<li>Pelatihan Literasi Finansial</li>' +
      '</ul><br />' +
      '"Jadi, aku melihat yang dibutuhkan sama teman-teman ini untuk berubah dulu. Karena kalau ini (perusahaan) sudah dibuka, tapi kalian (transgender) nggak berubah, kalian akan tetap kalah," kata Mia, menekankan pentingnya kesiapan dari perusahaan dan calon pekerja.<br /><br />' +
      'SuaraKita juga berencana meluncurkan modul pelatihan yang terdiri dari 5 pelatihan utama ini. Sebelumnya, mereka sudah memulai pelatihan membuat CV yang aman melalui Zoom yang diikuti oleh 8 orang selama 5 jam. Setelah modul selesai, SuaraKita akan melakukan uji coba pelatihan dengan 3 metode: intensif offline 3 hari di hotel, intensif online 4 hari (2 jam per hari), dan workshop umum 1 hari. Harapannya, pelatihan ini akan berdampak nyata bagi kawan transgender.<br /><br />' +
      'Melalui upaya ini, SuaraKita bertujuan untuk mengkoneksikan dan menjembatani kawan transgender dengan perusahaan, membuka kesempatan yang selama ini tertutup, dan meratakan "jalan berbatu" menuju pekerjaan layak yang menjadi hak setiap individu.<br /><br />',
  },
];

const FormalJobPage = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-6 max-w-4xl mx-auto space-y-8">
      {data.map((item, index) => (
        <div key={index} className="w-full space-y-4">
          {item.title && (
            <h1
              className="text-2xl font-bold text-center"
              dangerouslySetInnerHTML={{ __html: item.title }}
            />
          )}

          {item.image && item.content ? (
            <div
              className={`flex flex-col md:flex-row ${
                item.direction === 'left' ? '' : 'md:flex-row-reverse'
              } gap-4 items-center`}
            >
              <img
                className="w-full md:w-1/2 rounded-md"
                src={item.image}
                alt="content image"
              />
              <div
                className="text-base text-justify text-gray-800 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            </div>
          ) : item.content ? (
            <div
              className="text-base text-justify text-gray-800 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          ) : item.image ? (
            <div className="flex justify-center">
              <img
                className="w-full md:w-1/2 rounded-md"
                src={item.image}
                alt="standalone image"
              />
            </div>
          ) : null}
        </div>
      ))}

      <Link
        to="/"
        className="bg-pink-300 text-black font-semibold py-2 px-6 rounded-full hover:bg-pink-400 transition"
      >
        Selesai
      </Link>
    </div>
  );
};

export default FormalJobPage;
