import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import DetailKonserComponent from '../components/DetailKonserComponent';
import { getKonserDetailById } from '../data/index';

const DetailKonserPage = () => {
  const { id } = useParams();
  const [konserDetail, setKonserDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = getKonserDetailById(id); 
    setKonserDetail(data);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="detail-konser-page-loading">
        <Container className="text-center py-5">
          <p>Memuat detail konser...</p>
        </Container>
      </div>
    );
  }

  return (
    <div className="detail-konser-page">
      <Container className="detail-konser-main-container my-4">
        <DetailKonserComponent konserDetail={konserDetail} />
      </Container>
    </div>
  );
};

export default DetailKonserPage;