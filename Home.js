import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Selamat Datang Di Institut Teknologi Del</h1>
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>FAKULTAS IT DEL</Card.Title>
              <Card.Text>
              <b>Fakultas Vokasi</b>
              <li>Teknologi Informasi (D3)</li>
              <li>Teknologi Komputer (D3)</li>
              <li>Teknologi Rekayasa Perangkat Lunak (D4)</li>
              <b>Fakultas Informatika dan Teknik Elektro dengan Program Studi:</b>
              <li>Informatika (S1)</li>
              <li>Sistem Informasi (S1)</li>
              <li>Teknik Elektro (S1)</li>
              <b>Fakultas Teknologi Industri (FTI) dengan Program Studi:</b>
              <li>Manajemen Rekayasa (S1)</li>
              Fakultas Bioteknologi (FB) dengan Program Studi:
              <li>Teknik Bioproses (S1)</li>
             
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>PENDIDIKAN KARAKTER</Card.Title>
              <Card.Text>

Pembentukan, pengembangan, dan penguatan karakter mahasiswa di IT Del adalah salah
 satu upaya dan proses pengejawantahan nilai-nilai moral bangsa. Upaya mendidik mahasiswa 
 yang tidak hanya ahli di bidangnya (hardskills) namun diikuti dengan karakter yang senantiasa
  menghidupi dan mengimplementasikan nilai-nilai Del dan menghidupi 3M: (1) MarTuhan (godliness):
   Beriman (faithful), Ceria (cheerful), Peduli (caring); (2) Marroha (conscious): Tulus (trustworthy), Bertanggung Jawab (responsible), Tangguh (gritty); dan (3) Marbisuk (wise): Ingin tahu (curious), Inovatif (innovative), Cerdas (smart).

              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>BEASISWA</Card.Title>
              <Card.Text>
              Beasiswa Bagi Mahasiswa yang Berprestasi (40%). Beasiswa diberikan pada satu semester berupa 
              subsidi Sumbangan Pembinaan Pendidikan (SPP) atau biaya bursar lainnya, yang besarnya 
              tergantung dari NR (nilai rata-rata) dan atau Indeks Prestasi Sementara (IPS) yang dicapainya 
              pada satu semester sebelumnya. Semua beasiswa diberikan dalam bentuk ”voucher” yang berlaku 
              untuk diperhitungkan pada pembayaran bursar dan tidak diberikan dalam bentuk uang tunai. 
              Pembayaran bursar mencakup biaya pendidikan (SPP),
               biaya asrama, biaya kantin, atau biaya lainnya yang ditetapkan IT Del.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>KEMITRAAN STARTEGIS</Card.Title>
              <Card.Text>
              Kemitraan Strategis dilakukan dengan berbagai lembaga dalam dan luar negeri, antara lain: 
              University of Huddersfield, University of Nottingham, United Kingdom, Mohamed Bin Zayed 
              University of Artificial Intelligence, PT Huawei Tech Investment, GMR Institute of Technology, 
              GMRVF, University of Wollongong, National Taiwan University (NTU), Nuffic NESO, UC Davis, 
              CNGR International, Beijing Genomics Institute (BGI), Czech University of Life Sciences in
               Prague (CULS), University of Amsterdam, the International Computing Academy (ICA), 
               PT Kinema Systrans multimedia ‘Infinite Studios’ (IS)”, Russia-Indonesia Business Council 
               (RIBC), Hebei Normal university, University of Queensland, the University of Groningen,
                 Glints Singapore Pte.Ltd., University of Amsterdam, ITB, UGM, Universitas Kristen Petra,
                  Badan Siber dan Sandi Negara (BSSN), BRIN,  dan perguruan tinggi juga Industri terkenal
                   dalam negeri lainnya.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>DEWAN MAHASISWA</Card.Title>
              <Card.Text>
              Dewan Mahasiswa IT Del terdiri dari tujuh divisi yang dipimpin oleh seorang koordinator. 
              Setiap koordinator memiliki beberapa anggota yang membantu dalam kegiatan divisi tersebut
              .Fungsi, tugas, dan wewenang Dewan Mahasiswa IT Del harus sesuai dengan Anggaran Dasar. Divisi-divisi selama masa kepengurusan Dewan Mahasiswa IT Del adalah:
                 <li>Divisi Pendidikan</li>
                 <li>Pembagian Ordo</li>
                 <li>Divisi Olahraga</li>
                 <li>Divisi Agama</li>
                 <li>Divisi Peralatan</li>
                <li>Divisi Hubungan Eksternal</li>

              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
