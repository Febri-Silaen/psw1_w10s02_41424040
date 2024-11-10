
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Terimakasih telah mengirimkan pesan. pesan anda akan diproses!');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">KONTAK IT DEL</h1>
      <Row>
        <Col md={6} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </Form>
        </Col>

        <Col md={6} className="mt-4 mt-md-0">
          <h4>Informasi Kontak</h4>
          <p>
            <strong>Address:</strong><br />
            Institut Teknologi Del<br />
            Jl. Sisingamangaraja, Sitoluama<br />
            Laguboti, Toba Samosir<br />
           Provinsi Sumatra, Indonesia
          </p>
          <p>
            <strong>Email:</strong> @del.ac.id<br />
            <strong>Phone:</strong> Telp: +62 632 331234
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
