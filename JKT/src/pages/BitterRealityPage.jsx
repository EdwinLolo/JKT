import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import DropdownList from '../components/DropdownList';
import img10 from '../assets/images/ILUSTRASI 6.png';

const data = [
  {
    title: 'Realita Pahit di Setiap Tahapan Kerja <br /> <br />',
    content:
      'Realitas pahit yang dihadapi transgender tidak hanya sebatas jenis pekerjaan yang terbatas dan pendapatan yang minim saja. Demi meraih kehidupan layak, kelompok transgender melalui rintangan bahkan di setiap tahapan kerja. Mulai dari proses melamar pekerjaan sampai sudah bekerja pun tidak luput dari diskriminasi. <br /><br />',
  },
  {
    dropdownList: [
      {
        title: 'Sulitnya Proses Melamar Pekerjaan',
        isOpen: false,
        content:
          'Pintu gerbang menuju pekerjaan sering kali menjadi tempat pertama terjadinya diskriminasi. Dalam survei yang dilakukan Transmen Indonesia, 75% responden pernah menjadi korban diskriminasi atau kekerasan dalam proses melamar pekerjaan. Bentuk diskriminasinya antara lain:<br /><br />' +
          '<b>Pembatasan ekspresi gender</b><br />' +
          'Menjadi hal yang paling sering terjadi di translaki dan transpuan. Ketika melamar pekerjaan, sering kali translaki diminta berdandan dengan pakaian feminin atau bahkan berhijab. Sedangkan, bagi transpuan sering kali diminta untuk tidak berdandan, tidak boleh menunjukkan ekspresi gendernya sebagai transpuan.<br />' +
          '“Posisi kami pada saat melamar ke resto, ke supermarket, atau ke marketing, kami laki. Jadi kami tidak mengakui bahwa kami waria gitu,” ucap Erika (45), seorang transpuan ketika menceritakan pengalamannya melamar pekerjaan.<br /><br />' +
          '<b>Misgendering / Deadnaming</b><br />' +
          'Salah satu yang sering terjadi adalah misgendering atau deadnaming. Sering kali transgender yang belum transisi legal ataupun transisi medis dipertanyakan identitas gendernya.<br />' +
          '“Saat interview itu, sama orang pusat diginiin: Sampean itu laki-laki apa perempuan sih? Soalnya gak jelas nih bingung,” ucap Retsu (31) ketika menceritakan pengalamannya wawancara kerja.<br /><br />' +
          '<b>Outing (identitas dibocorkan)</b><br />' +
          'Berdasarkan survei yang dilakukan Transmen Indonesia 2025, sebanyak 10 partisipan yang pernah mengalami outing atau identitas dibocorkan. Seorang translaki yang berusia di rentang 25 – 35 tahun menceritakan pengalamannya di-outing oleh HRD di perusahaan yang membawa 5 teman hanya untuk memastikan gender alih-alih membahas pekerjaan.<br /><br />' +
          '<b>Penolakan</b><br />' +
          'Hal ini merupakan pengalaman yang umum terjadi di kalangan trans laki-laki dan transpuan ketika mereka melamar pekerjaan. Dalam laporan Transmen Indonesia, 26 dari 75 partisipan mengaku pernah mengalami penolakan ketika melamar pekerjaan.<br />' +
          '“Jadi, sebelum masuk, masih di gerbang, langsung to the point mereka bilang gak nerima yang tomboy. Jadi, belum sempat daftar,” cerita Tommy (36), seorang translaki.<br /><br />' +
          '<b>Pelecehan verbal (diejek, ditertawakan)</b><br />' +
          'Cukup sering terjadi, deadname yang ditertawakan, diolok-olok, atau bahkan disuruh bertobat.<br /><br />' +
          '<b>Kekerasan seksual</b><br />' +
          'Pelanggaran serius yang menyebabkan trauma mendalam bagi korban. Sebanyak 2 partisipan dari survei Transmen Indonesia 2025 mengalami kekerasan berupa pemeriksaan tubuh pada saat melamar kerja. Hal ini tidak hanya melecehkan secara fisik tetapi juga meninggalkan trauma bagi korban.<br /><br />',
      },
      {
        title: 'Diskriminasi di Tempat Kerja',
        isOpen: false,
        content:
          'Tidak jauh berbeda dengan proses melamar pekerjaan, ketika sudah berhasil mendapatkan pekerjaan, transgender tetap tidak luput dari diskriminasi. Bentuk-bentuk diskriminasi dari proses melamar pekerjaan sampai bekerja pun tidak jauh berbeda. Diskriminasi seperti misgendering / deadnaming, pelecehan verbal, kekerasan seksual, pembatasan ekspresi gender, outing, bahkan penolakan pun masih paling banyak terjadi di tempat kerja. Mendapatkan pekerjaan justru menambah tantangan baru lagi untuk transgender seperti:<br /><br />' +
          '<b>Pembedaan upah dan tunjangan</b><br />' +
          'Upah yang tidak sebanding dengan beban kerja juga sering kali terjadi di kalangan transgender. Translaki ataupun transpuan sering kali mendapatkan beban kerja berat tetapi, upah lebih sedikit atau tidak sebanding dengan beban kerjanya. Bahkan sering juga tidak mendapatkan tunjangan seperti karyawan pada umumnya.<br /><br />' +
          '<b>Pembatasan jenjang karir (sulit naik jabatan)</b><br />' +
          'Tidak sedikit juga yang kesulitan untuk naik jabatan karena identitas gendernya yang dipandang sebelah mata.<br /><br />' +
          '<b>Diberhentikan sepihak</b><br />' +
          'Tidak hanya pembatasan jenjang karir, banyak juga transgender yang diberhentikan sepihak oleh perusahaan karena ada yang membocorkan identitas gendernya.<br /><br />',
      },
    ],
    image: img10,
    direction: 'right',
    content:
      'Diskriminasi yang terjadi selama proses melamar pekerjaan sampai bekerja pun memberikan dampak yang serius bagi kalangan transgender. Ada yang harus berkompromi dengan syarat dan ketentuan yang diberikan tempat kerja, yang cukup banyak terjadi adalah kesehatan mental memburuk dan kesulitan bekerja karena produktivitas menurun, pendapatan pun ikut menurun sampai banyak yang berhenti bekerja akibat diskriminasi di tempat kerja yang sering terjadi. <br /><br />',
  },
];

const BitterRealityPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="px-6 py-3">
      {data.map((item, index) => (
        <div key={index} className="max-w-3xl mx-auto space-y-3">
          <div
            className="text-2xl text-center font-bold mb-2"
            dangerouslySetInnerHTML={{ __html: item.title }}
          />
          <div className="flex flex-row">
            <div className="flex flex-col">
              {item.dropdownList &&
                item.dropdownList.map((dropdown, idx) => (
                  <DropdownList key={idx} data={dropdown} />
                ))}
              <div
                className="text-gray-700 text-justify"
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            </div>
            <div>
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  data-aos="zoom-in"
                  className={`w-90 h-90 max-w-xl pl-15 ${
                    item.direction === 'right' ? 'ml-auto' : 'mr-auto'
                  }`}
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BitterRealityPage;
