import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img32 from '../assets/images/Filmmaker 3.jpg';
import img33 from '../assets/images/Filmmaker 1.jpg';
import img34 from '../assets/images/Filmmaker 5.jpg';
import img35 from '../assets/images/Filmmaker 4.jpg';
import img36 from '../assets/images/Filmmaker 2.jpg';

const data = [
  {
    title:
      'Filmmaker Sekaligus Pengusaha:<br/> ' +
      'Beradvokasi Lewat Karya dan Usaha',
    content:
      'Ayara Bhanukusuma, atau biasa dipanggil Abe (31 tahun) adalah seorang translaki yang memiliki banyak profesi sekaligus. Saat ini, Abe bekerja sebagai social media campaigner di sebuah NGO, aktif sebagai freelancer di bidang perfilman, dan menjadi pengusaha yang mengelola Roti Pamur. Di samping itu, Abe juga menjadi mahasiswa pascasarjana Film di IKJ dengan spesialisasi penyutradaraan.<br /><br />' +
      'Di tengah kesibukannya saat ini, Abe seorang lulusan S1 perfilman, memilih lanjut pascasarjana Film. Ketertarikannya pada dunia perfilman sejak dulu menjadi alasannya. Meskipun tidak berkeinginan menjadikan film sebagai pekerjaan utama, Abe memiliki keinginan yang kuat untuk memperdalam pengetahuannya tentang produksi film. Ia mempunyai impian ingin mendirikan sekolah film gratis bagi kawan-kawan transgender.  "Karena sekolah film itu, kita tahu biayanya mahal. Jadi, aku pikir dengan membuat film, kita bisa beradvokasi juga berkesenian," ujarnya. Abe meyakini bahwa advokasi tak harus selalu berupa aksi turun ke jalan tetapi, bisa juga dilakukan melalui media baru yang lebih relevan, lebih pop culture seperti media sosial atau film.<br /><br />' +
      'Sejak sekitar 2015, Abe sudah memulai karirnya dengan membuat film untuk ditayangkan di festival. Lanjut di 2016, Abe bekerja sebagai penulis untuk acara TV Tetangga Masa Gitu di NET TV selama 1 tahun. Kemudian, Abe melanjutkan karirnya di perfilman dengan bekerja sebagai freelancer asisten sutradara untuk FTV, menjadi personal director untuk influencer Awkarin tahun 2018–2019, menjadi producer design klip video untuk Lesti Kejora, dan 2019 bekerja di Production House StroTV sebagai sutradara, produser, dan penulis sekaligus.',
  },
  {
    image: img32,
    content:
      '<br />Mencoba peruntungan di tahun 2020, Abe memilih membuka usaha pecel ayam dan keluar dari pekerjaannya saat itu. Namun, ketika terjadi Pandemi Covid-19 dan diadakannya PSBB saat itu, terpaksa Abe menutup usahanya itu dan mencoba jualan rendang secara online. Setelah PSBB berakhir, Abe berjualan nasi bakar dan bakso bakar di daerah Pamulang. Dari pengalamannya berjualan nasi dan bakso bakar, Abe dapat banyak pelajaran berharga seperti mengelola keuangan dan mengelola usaha.<br /><br />' +
      'Kemudian, tahun 2021 sampai sekarang, diawali dengan rasa kerinduan berkarya di dunia film atau visual, Abe bekerja di NGO transpuan sebagai social media campaigner. Menyadari bahwa pekerjaan di NGO tidak bisa diandalkan sepenuhnya untuk memenuhi kebutuhan sehari-hari, Abe memilih kembali berbisnis sehingga lahirlah Roti Pamur di 2024. Nama "Pamur" sendiri memiliki makna yaitu "panjang umur" dengan harapan pembeli selalu sehat dan panjang umur. Selain itu, nama ini juga merupakan dedikasi Abe kepada eyang/kakeknya, Pak Murwadi yang biasa dipanggil Pak Mur, yang dulunya bermimpi menjadi pedagang namun tak kesampaian dan berakhir menjadi guru.<br /><br />' +
      'Abe memang tidak pernah tertarik dengan pekerjaan formal atau korporat karena menyukai seni dan fleksibilitas. Baginya, pilihan ia saat ini berbisnis dan bekerja di film mampu memberikan fleksibilitas dalam waktu dan penampilan yang ia butuhkan. Terinspirasi dari kebiasaannya suka jajan dan nongkrong, ia memulai Roti Pamur dengan sistem gerobakan take away untuk meminimalkan biaya operasional. Sampai saat ini, Roti Pamur sudah ada 2 cabang di Jakarta Selatan dan sempat membuka cabang di Jakarta Barat.<br /><br />' +
      'Namun, perjalanannya tidak selalu mulus. Keluarga Abe awalnya sempat skeptis dan meremehkan pilihannya menjadi filmmaker dan pengusaha, apalagi dengan kondisi Abe sebagai trans laki-laki. "Mereka terlalu mengkhawatirkan hidupku itu loh, bisa enggak ya hidup sebagai seorang translaki-laki dengan sebagai pengusaha juga atau filmmaker. Itu kan mustahil lah buat mereka itu," tuturnya. Namun, Abe gigih membuktikan: "Tapi, kan di titik ini ternyata aku juga menunjukkan ke keluarga aku bahwa walaupun aku translaki-laki terus aku juga sambil jualan. Tapi, aman-aman aja hidupku."<br /><br />',
  },
  {
    image: [img33, img34, img35, img36],
    content:
      'Rintangan dari luar pun juga ada. Beberapa kali usahanya sempat dilaporkan ke Satpol PP secara anonim, padahal pedagang kaki lima lainnya tidak ada yang dilaporkan. Bahkan, di salah satu cabang Roti Pamur, pemilik tempat sempat mempertanyakan identitas Abe sebagai trans laki-laki karena takut tempatnya akan dipenuhi transgender. <br /><br />' +
      'Hidup sebagai translaki tidak mudah. Di dunia film, Abe juga pernah menghadapi berbagai ketidaknyamanan, terutama pelecehan dan kekerasan verbal. Selain itu, sebagai pengusaha, ia harus belajar banyak dari nol tentang bisnis FnB, mengatur karyawan, keuangan, dan memasak. Tantangan utama dalam meniti karier bagi Abe adalah underestimate yang datang karena identitas, ekspresi, dan penampilannya. Orang-orang awalnya fokus pada pekerjaannya, namun setelah mengetahui ia transgender, fokus bergeser ke identitasnya, dan ia diremehkan. Ia pernah dianggap tidak mampu menjadi sutradara karena ia translaki dan bertubuh kecil. Namun, setelah menunjukkan hasil yang memuaskan, barulah ia mendapatkan respect dari sekitarnya. <br /><br />',
  },
  {
    content:
      'Tantangan lain muncul saat membangun personal branding sebagai pemilik Roti Pamur, karena kini orang sering lebih dulu melihat siapa di balik produknya. "Kalau misalnya aku menunjukkan personal branding aku seorang translaki-laki, bisa ada yang terima dan ada yang nggak," ujarnya.<br /> <br />' +
      'Di balik semua tantangan itu, ada motivasi besar. "Kita sebagai seorang trans kan agak susah ya dapat kerja. Jadi, aku berpikir, kenapa aku nggak ciptain ruang aman ku sendiri aja? Ya, salah satu caranya dengan bikin bisnis FnB ini di mana aku bisa milih siapa yang akan kerja di sini dan aku juga bisa milih tamu-tamuku." Sejak awal, tujuan Abe mendirikan usaha FnB juga untuk menciptakan ruang aman bagi diri sendiri dan kawan transgender lainnya. "Jadi, memang tujuannya kan dari awal memang menciptakan ruang aman buat diriku dan juga kawan-kawan yang mungkin sulit dapat kerja di luar. Ya udah, yuk kita cari uang bareng-bareng di tempat ini."<br /> <br />' +
      'Kunci keberhasilan menurut Abe adalah disiplin, sabar, punya strategi dan branding yang kuat, serta kemampuan mengatur finansial dengan baik. Modal awalnya berasal dari hasil kerja di NGO dan freelance sebagai editor. "Aku pengen nunjukin aja ke keluarga aku bahwa apa yang aku mau dan apa yang jadi pilihan aku, aku benar-benar bisa wujudkan asal aku percaya dan yakin. Jadi, aku benar-benar pure (modal) dari kerja, aku kumpulin, kemudian aku putar buat bikin usaha ini (Roti Pamur)."<br /><br />' +
      'Abe berharap kawan-kawan transgender yang memulai usaha bisnis bisa membuat satu kolektif, saling bercerita tentang kondisi dan memberikan masukan. "Aku sih berharapnya, kita semua mulai saling terjalin satu sama lain. Kita bisa bikin kolektif. Jadi, kita bisa saling kasih masukan, dengar, dan terhubung satu sama lain. Jadi, jangan masing-masing lah. Saling terhubung." Abe juga berharap untuk dunia pekerjaan di Indonesia agar ada lebih banyak ruang inklusif untuk siapa pun. "Jadi, pengennya, ke depannya, lebih banyak ruang-ruang yang lebih inklusif dan melihatnya lebih ke pada keinginan dan kemauan kawan-kawan sebesar apa untuk bekerja. Bukan cuma dari kualitas atau identitas."<br />',
  },
];

const FilmmakerPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center position-relative z-index-99">
      <div
        className="bg-white max-w-6xl w-full p-6 rounded-xl shadow-md space-y-6 bg-no-repeat bg-left bg-[length:300px_auto]"
        style={{
          backgroundImage: "url('/images/ILUSTRASI 11.2.png')",
          backgroundPosition: 'right top ',
        }}
      >
        {data.map((item, index) => (
          <div key={index} className="space-y-4">
            {/* Title + Paragraph 1 */}
            {index === 0 && (
              <>
                {item.title && (
                  <div
                    className="text-xl font-semibold mb-10 text-center"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                )}
                <div
                  className="text-justify hypens-auto"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              </>
            )}

            {/* Image center + paragraph */}
            {index === 1 && (
              <div
                className="flex flex-col items-center gap-4 bg-no-repeat bg-left bg-[length:300px_auto]"
                style={{
                  backgroundImage: "url('/images/ILUSTRASI 11.1.png')",
                  backgroundPosition: 'left 600px ',
                }}
              >
                <img
                  className="rounded-md max-w-xl w-full"
                  src={item.image}
                  alt="Image error"
                />
                <p className="text-xs text-center mt-2 text-gray-600 italic">
                  Abe saat bekerja di industri film.
                  <br />
                  Foto: Dokumentasi pribadi Abe
                </p>
                <div
                  className="text-justify"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              </div>
            )}

            {/* Carousel + Content */}
            {index === 2 && (
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Carousel - Left */}
                <div className="w-full md:w-1/2">
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

                  {/* Caption di bawah carousel */}
                  <p className="text-xs text-center mt-2 text-gray-600 italic">
                    Abe saat bekerja di industri film.
                    <br />
                    Foto: Dokumentasi pribadi Abe
                  </p>
                </div>

                {/* Content - Right */}
                <div
                  className="w-full md:w-1/2 text-justify"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              </div>
            )}

            {index === 3 && (
              <div className="flex flex-col gap-4">
                <div
                  className="text-justify"
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

export default FilmmakerPage;
