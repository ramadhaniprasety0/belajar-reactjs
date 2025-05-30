import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import CarouselComponentMusic from '../components/CarouselComponentMusic';
import KonserMendatangComponent from '../components/KonserMendatangComponent';

const KonserMusicsPage = () => {
  const [activeFilter, setActiveFilter] = useState('Lihat Semua');
  const filters = ['Lihat Semua', 'Terbaru', 'Rating', 'Genre'];

  return (
    <div className="konser-musics-page">
      <Container className="mt-4">

        {/* Carousel Musik */}
        <Row className="mb-4 box-carousel-musics">
          <CarouselComponentMusic />
        </Row>

        {/* Judul utama */}
        <Row className="mb-3">
          <h1 className="fw-bold text-primary text-center">Konser Mendatang</h1>
        </Row>

        {/* Filter */}
        <Row className="mb-4">
          <div className="filter-buttons d-flex justify-content-start gap-3 flex-wrap">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`btn rounded-pill px-4 ${
                  activeFilter === filter
                    ? 'btn-dark active'
                    : 'btn-outline-dark'
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </Row>

        {/* Musik Populer */}
        <Row className="box-konser-musics p-3">
          <KonserMendatangComponent />
        </Row>

      </Container>
    </div>
  );
};

export default KonserMusicsPage;
