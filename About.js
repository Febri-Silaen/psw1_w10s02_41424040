import React from 'react';
import'./About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="text-center mb-4">Tentang Institut Teknologi Del</h1>
      <div className="content">
        <h3>SEJARAH IT DEL</h3>
        <p>
          Jenderal TNI (Purn.) Luhut B. Pandjaitan mendirikan Yayasan Simargala pada tanggal 30 
          Agustus 2001 di Jakarta. Simargala adalah nama desa kelahirannya di Huta Namora, Kecamatan Silaen, Kabupaten Toba Samosir, Sumatera Utara. Pendirian Yayasan Simargala dilanda keinginan luhur untuk meningkatkan keterampilan dan kesejahteraan masyarakat perdesaan yang kurang menyentuh pembangunan. Tekad yang kuat untuk berpartisipasi pada program pemerintahan di bidang pendidikan, 
          sosial, kemanusiaan, seni dan budaya, dan kelestarian lingkungan.
          Masih pada tahun 2001, karena pertimbangan nama yang bersifat lokal, Yayasan Simargala diubah menjadi Yayasan Del. Kata “Del” berasal dari usulan salah satu anggota Yayasan untuk menggunakan istilah “Del”, yang mengandung arti “pemimpin yang selalu berada berada di posisi lebih maju”. Yayasan Del adalah organisasi nir laba yang didirikan untuk membawa perubahan dan pembaharuan bagi individu dan juga masyarakat.
        </p>

        <h3 className="mt-4">VISI IT DEL</h3>
        <p>
          “Menjadi lembaga yang lebih depan dalam pengembangan bakat manusia yang memberikan kontribusi
           berarti pada inovasi teknologi dan keinginan sosial”. (Menjadi Institusi selangkah lebih maju
           dalam pengembangan bakat manusia
           yang memberikan kontribusi berarti terhadap inovasi teknologi dan keberlanjutan sosial)
        </p>

        <h3 className="mt-4">NILAI NILAI IT DEL</h3>
        <p>
          Karakter Del adalah:
          “Sikap dan perilaku untuk selalu memilih lebih maju dalam upaya-upaya membentuk masa depan yang lebih baik berlandaskan iman, hati nurani yang bersih, dan akal budi yang terpelajar”. Nila-nilai dasar IT Del adalah MarTuhan 
          (kesalehan), Marroha (sadar), dan Marbisuk (bijaksana).
        </p>
      </div>
    </div>
  );
};

export default About;