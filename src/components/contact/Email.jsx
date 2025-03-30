import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { FaMailBulk, FaPhone, FaTelegram } from 'react-icons/fa';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <Container data-bs-theme="dark" className="bg-dark">

      <center className="d-block d-md-none">
        <h1>
          Contact Me
        </h1>
      </center> 
      <h2 className="d-none d-md-block ms-3">
        Contact Me
      </h2>

      <Row>
        <Col xs={12} md={6} className='p-4'>

          <Form ref={form} onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" name="email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} type="text" name="message" required />
            </Form.Group>
            <Button variant="primary" type="submit" value="Send">
              Send
            </Button>
          </Form>

        </Col>
        <Col xs={12} md={6} className='p-4'>
          <h4>Let's Get in Touch</h4>
          <p>Have a question or want to collaborate? Feel free to reach out—I'd love to hear from you!</p>

          <h4>Contact Information</h4>
          <p>Alternatively, feel free to contact me via the following channels</p>
          <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
          <br/>
          <ul className='list-unstyled'>
            <li className='mb-2'>
              <FaMailBulk size={30} className='me-2' />
              <span style={{ fontSize: "1.2rem" }}><i>Email: </i></span>
              <span style={{ fontSize: "1.1rem" }}>seantanyihan@gmail.com</span>
            </li>
            <li className='mb-2'>
              <FaTelegram size={30} className='me-2' />
              <span style={{ fontSize: "1.2rem" }}><i>Telegram: </i></span>
              <span style={{ fontSize: "1.1rem" }}>@Tan_Yi_Han</span>
            </li>
            <li className='mb-2'>
              <FaPhone size={30} className='me-2' />
              <span style={{ fontSize: "1.2rem" }}><i>Phone: </i></span>
              <span style={{ fontSize: "1.1rem" }}>(+65) 9479 6350</span>
            </li>
          </ul>

        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;