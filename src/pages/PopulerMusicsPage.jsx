import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import CarouselComponentMusic from '../components/CarouselComponentMusic';
import PopularComponentMusic from '../components/PopularComponentMusic';

const PopularMusicPage = () => {
  const [activeFilter, setActiveFilter] = useState('Lihat Semua');
  const filters = ['Lihat Semua', 'Terbaru', 'Rating', 'Genre'];

  return (
    <div className="popular-musics-page">
      <Container className="mt-4">

        {/* Carousel Musik */}
        <Row className="mb-4 box-carousel-musics">
          <CarouselComponentMusic />
        </Row>

        {/* Judul utama */}
        <Row className="mb-3">
          <h1 className="fw-bold text-primary text-center">Musik Populer di FindFun</h1>
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
        <Row className="box-populer-musics p-3">
          <PopularComponentMusic />
        </Row>

      </Container>
    </div>
  );
};

export default PopularMusicPage;
