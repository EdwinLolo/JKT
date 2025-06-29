import React from 'react';
import { Link } from 'react-router-dom';
import DropdownList from '../components/DropdownList';
import { useEffect } from 'react';

const data = [
  {
    title: 'Daftar Istilah <br /><br />',
    dropdownList: [
      {
        title: 'Identitas Gender',
        isOpen: false,
        content:
          'Identifikasi pribadi seseorang tentang dirinya sebagai perempuan, laki-laki, atau lainnya yang didasari pada perasaan yang sangat personal. Identitas gender dapat sama atau berbeda dengan gender yang ditetapkan saat lahir.<br />',
      },
      {
        title: 'Transgender',
        isOpen: false,
        content:
          'Transgender atau yang biasa disebut ‘trans’ adalah seorang yang identitas gendernya berbeda dengan gender yang ditetapkan saat lahir.<br />',
      },
      {
        title: 'Translaki',
        isOpen: false,
        content:
          'Merupakan orang yang mengidentifikasi diri sebagai laki-laki tetapi, ditetapkan sebagai perempuan saat lahir. Istilah lain yang biasa dipakai selain translaki adalah transmen, transpria, dan sebagainya.<br />',
      },
      {
        title: 'Transpuan',
        isOpen: false,
        content:
          'Merupakan orang yang mengidentifikasi diri sebagai perempuan tetapi, ditetapkan sebagai laki-laki saat lahir. Istilah lain yang biasa dipakai selain transpuan adalah waria, dan lainnya.<br />',
      },
      {
        title: 'Cisgender',
        isOpen: false,
        content:
          'Istilah yang merujuk pada individu yang identitas gendernya sama dengan gender yang ditetapkan saat lahir. Contoh, seorang perempuan yang ditetapkan saat lahir dan mengidentifikasikan dirinya sebagai perempuan disebut cisgender perempuan (cis perempuan).<br />',
      },
      {
        title: 'Transisi Sosial',
        isOpen: false,
        content:
          'Proses seorang trans menjalani hidup sebagai identitas gendernya dengan menyatakan identitas gendernya pada orang lain, memperkenalkan diri dengan nama baru, mengganti penampilan, masuk toilet dengan penanda gender yang mewakili dirinya, dan lain-lain.<br />',
      },
      {
        title: 'Transisi Legal',
        isOpen: false,
        content:
          'Proses seorang trans mengganti nama dan atau mengganti jenis kelamin dalam dokumen administrasi dan kependudukan melalui proses peradilan.<br />',
      },
      {
        title: 'Transisi Medis',
        isOpen: false,
        content:
          'Proses seorang trans melakukan terapi hormon, memilih tindak operasi rekonstruksi dada, implant payudara, dan lain-lain.<br />',
      },
      {
        title: 'Kelompok Marginal',
        isOpen: false,
        content:
          'Sekelompok orang yang terpinggirkan oleh sebuah tatanan masyarakat baik dalam ekonomi, pendidikan dan budaya yang tidak mendukungnya.  Kelompok marginal terdiri dari anak-anak dengan kebutuhan khusus, lansia, ODGJ, penyandang disabilitas (difabel), veteran perang, tunawisma, fakir miskin, LGBT, etnis minoritas.<br />',
      },
      {
        title: 'Deadname',
        isOpen: false,
        content:
          '‘Nama mati’ merupakan nama yang diberikan kepada seorang trans saat lahir dan tidak lagi digunakan oleh individu yang bersangkutan.<br />',
      },
      {
        title: 'Deadnaming',
        isOpen: false,
        content:
          ' Deadnaming adalah tindakan memanggil atau menyebut orang transgender dengan nama lamanya, yang biasanya diberikan sebelum mereka transisi, tanpa persetujuan mereka.<br />',
      },
      {
        title: 'Misgendering',
        isOpen: false,
        content:
          'Misgendering adalah memanggil atau menyebut seseorang transgender dengan gender yang salah secara sengaja.<br />',
      },
      {
        title: 'Gender Dysphoria',
        isOpen: false,
        content:
          'Rasa frustasi dan ketidaknyamanan hebat yang dirasakan seorang trans yang disebabkan oleh perbedaan antara gender yang ditetapkan saat lahir dengan identitas gender yang ia rasakan dan hidupi. Rasa tidak nyaman ini juga dapat disebabkan oleh standar kaku yang ada di masyarakat tentang ciri, sifat, dan fungsi yang dilekatkan pada gender tertentu.<br />',
      },
    ],
  },
];

const TerminologyListPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className="relative px-6 py-6">
      {/* Tombol Back */}
      <Link
        to="/"
        className="absolute left-6 top-6 bg-pink-300 text-black font-bold rounded-full w-11 h-11 flex items-center justify-center shadow hover:bg-pink-400 transition"
      >
        <span className="text-3xl pb-1">←</span>
      </Link>

      {/* Konten Utama */}
      {data.map((item, index) => (
        <div key={index} className="max-w-2xl mx-auto space-y-4 pt-2">
          <div
            className="text-2xl font-bold text-center"
            dangerouslySetInnerHTML={{ __html: item.title }}
          />

          {item.dropdownList &&
            item.dropdownList.map((dropdown, idx) => (
              <DropdownList key={idx} data={dropdown} />
            ))}
        </div>
      ))}
    </div>
  );
};

export default TerminologyListPage;
