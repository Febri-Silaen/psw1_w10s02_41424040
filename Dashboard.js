import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Table, Button } from 'react-bootstrap';

const Dashboard = () => {
  const [registeredUsers, setRegisteredUsers] = useState([
    {
      id: 1,
      name: "Nicky Manullang",
      email: "nickygmail.com",
      school: "SMA Negeri 1",
      district: "Toba"
    },
    {
      id: 2,
      name: "Febri Silaen",
      email: "febri@gmail.com",
      school: "SMA Negeri 2",
      district: "Samosir"
    },
    {
        id: 3,
        name: "sabastian",
        email: "sabas@gmail.com",
        school: "SMA Negeri 2",
        district: "Samosir"
      },
      {
        id: 4,
        name: "marjoahan ",
        email: "marojahan@marojahan.com",
        school: "SMA Negeri 2",
        district: "Samosir"
      },
      {
        id: 5,
        name: "Neuree siagian",
        email: "Neure@gmail.com",
        school: "SMA Negeri 2",
        district: "Samosir"
      }
  ]);

  const [stats, setStats] = useState({
    totalStudents: 0,
    totalSchools: 0,
    totalDistricts: 0
  });

  useEffect(() => {
    
    const uniqueSchools = new Set(registeredUsers.map(user => user.school));
    const uniqueDistricts = new Set(registeredUsers.map(user => user.district));

    setStats({
      totalStudents: registeredUsers.length,
      totalSchools: uniqueSchools.size,
      totalDistricts: uniqueDistricts.size
    });
  }, [registeredUsers]);

  const handleDelete = (id) => {
    setRegisteredUsers(registeredUsers.filter(user => user.id !== id));
  };

  return (
    <Container fluid className="mt-4">
      <Row>
        <Col>
          <h2 className="mb-4">Dashboard</h2>
        </Col>
      </Row>

 
      <Row className="mb-4">
        <Col md={4}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Total Mahasiswa</Card.Title>
              <h2>{stats.totalStudents}</h2>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Total Sekolah</Card.Title>
              <h2>{stats.totalSchools}</h2>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Total Districts</Card.Title>
              <h2>{stats.totalDistricts}</h2>
            </Card.Body>
          </Card>
        </Col>
      </Row>

     
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <h4>Pendaftaran Terbaru</h4>
            </Card.Header>
            <Card.Body>
              <Table responsive striped bordered hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Sekolah</th>
                    <th>District</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {registeredUsers.map(user => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.school}</td>
                      <td>{user.district}</td>
                      <td>
                        <Button 
                          variant="danger" 
                          size="sm"
                          onClick={() => handleDelete(user.id)}
                        >
                        Hapus
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>

    
      <Row className="mt-4">
        <Col md={6}>
          <Card>
            <Card.Header>
              <h4>Statistik Pendaftaran</h4>
            </Card.Header>
            <Card.Body>
             
              <p className="text-center">Visualisasi tren pendaftaran akan ditampilkan di sini</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header>
              <h4>Distribusi Distrik</h4>
            </Card.Header>
            <Card.Body>
             
              <p className="text-center"> Visualisasi distribusi distrik akan ditampilkan di sini</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
