import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import backGroundImage from '../assets/ready-back-school.jpg'; // Import background image

const LoginForm = () => {
  const [studentData] = useState({
    email: '',
    password: '',
  });

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        'The password must be 8 characters or more and characters, using a combination of letters and numbers and symbol like that  For example, Abcd@1234'
      )
      .required('Password is required'),
  });

  const handleSubmit = (values) => {
    console.log('Logging in...');
    console.log(values);
    const student = {
      ...values,
      role: 'student', // Assigning the default role when login
    };
    console.log('student logged in:', student);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backGroundImage})`,
        backgroundSize: 'cover',
        height: '100vh',
        padding: '20px',
      }}
    >
      <Container className='h-100'>
        <Row className='justify-content-center align-items-center h-100'>
          <Col md={6}>
            <Card className='bg-transparent border-0'>
              <Card.Body>
                <h1 className='text-center text-light'>Student Login</h1>
                <Formik initialValues={studentData} validationSchema={validationSchema} onSubmit={handleSubmit}>
                  {({ isSubmitting }) => (
                    <Form style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', padding: '20px', borderRadius: '10px' }}>
                      <div className='mb-3' style={{ textAlign: 'left' }}>
                        <label htmlFor='email' className='form-label fw-bold'>Email</label>
                        <Field type='email' name='email' className='form-control' />
                        <ErrorMessage name='email' component='div' className='text-danger' />
                      </div>
                      <div className='mb-3' style={{ textAlign: 'left' }}>
                        <label htmlFor='password' className='form-label fw-bold'>Password</label>
                        <Field type='password' name='password' className='form-control' />
                        <ErrorMessage name='password' component='div' className='text-danger' />
                      </div>
                      <div className="d-grid gap-2 ">
                        <Button type='submit' variant='primary' className='form-label fw-bold'>
                          Login
                        </Button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginForm;
