import React from 'react';
import { Container } from 'react-bootstrap';

const ErrorComponents = () => {
  return (
    <div>
        <Container className='w-100 min-vh-100 d-flex align-items-center justify-content-center'>
          <div className='d-flex flex-column align-items-center'>
            <h1 className='fw-bold text-danger'>Error 404</h1>
            <p>Halaman Ini Sedang Dalam Pengembangan !</p>
            <a href="/" className='btn btn-danger'>Back to Home</a>
          </div>
      </Container>
    </div>
  )
}

export default ErrorComponents