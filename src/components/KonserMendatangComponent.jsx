// src/components/KonserMendatangComponent.js
import React from 'react';
import { Col, Image, Button } from 'react-bootstrap'; // Row tidak lagi digunakan di level ini
import { konserTerbaru } from '../data/index';
import { Link } from 'react-router-dom';

const KonserMendatangComponent = ({ limit }) => {
  const displayedKonser = limit ? konserTerbaru.slice(0, limit) : konserTerbaru;

  return (
    <>
      {displayedKonser.map((konser) => (
        <Col key={konser.id} xs={12} className="konser-item-wrapper mb-3">
          <Link to={`/konser/${konser.id}`} className="text-decoration-none">
            <div className="konser-item-card new-layout"> {/* Tambahkan kelas new-layout */}
              
              {/* Bagian Gambar */}
              <div className="konser-image-section">
                <Image
                  src={konser.image}
                  alt={konser.title}
                  className="konser-item-image"
                />
              </div>

              {/* Bagian Detail Teks */}
              <div className="konser-details-section">
                <div className="konser-detail-content-wrapper"> {/* Wrapper untuk padding internal */}
                  <div className="konser-row-1">
                    <h3 className="konser-item-title">{konser.title}</h3>
                    {konser.status === "Tiket Habis" && (
                      <span className="badge-tiket-habis">{konser.status}</span>
                    )}
                    {konser.status === "Gratis" && (
                       <span className="badge-tiket-gratis">{konser.status}</span>
                    )}
                  </div>
                  <div className="konser-row-2">
                    <p className="konser-item-date-location">{konser.dateLocation}</p>
                    <p className="konser-item-price">{konser.priceRange}</p>
                  </div>
                  <p className="konser-item-description">{konser.description}</p>
                </div>
              </div>

              {/* Bagian Tombol */}
              <div className="konser-button-section">
                <Button className="btn-amankan-tiket btn-full-height">Amankan Tiket</Button>
              </div>

            </div>
          </Link>
        </Col>
      ))}
    </>
  );
};

export default KonserMendatangComponent;