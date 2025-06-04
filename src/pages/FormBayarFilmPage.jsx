// src/pages/FormBayarPage.js
import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import KomponenFormPembayaran from '../components/FormPembayaranFilmComponent';
import { getFilmUntukPembayaran } from '../data/index';

const FormBayarPage = () => {
  const { id } = useParams(); 
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dataFilm = getFilmUntukPembayaran(id);
    setFilm(dataFilm);
    setLoading(false);
  }, [id]);

  if (loading) {
    return <Container className="text-center my-5"><p>Memuat informasi pembayaran...</p></Container>;
  }

  return (
    <div className="halaman-pembayaran">
      <Container className="my-4">
        <KomponenFormPembayaran film={film} />
      </Container>
    </div>
  );
};

export default FormBayarPage;