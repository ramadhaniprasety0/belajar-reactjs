// src/pages/FormBayarPage.js
import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import KomponenFormPembayaran from '../components/FormPembayaranComponent';
import { getKonserUntukPembayaran } from '../data/index';

const FormBayarPage = () => {
  const { id } = useParams(); // Mengambil ID konser dari URL
  const [konser, setKonser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dataKonser = getKonserUntukPembayaran(id);
    setKonser(dataKonser);
    setLoading(false);
  }, [id]);

  if (loading) {
    return <Container className="text-center my-5"><p>Memuat informasi pembayaran...</p></Container>;
  }

  return (
    <div className="halaman-pembayaran">
      <Container className="my-4">
        <KomponenFormPembayaran konser={konser} />
      </Container>
    </div>
  );
};

export default FormBayarPage;