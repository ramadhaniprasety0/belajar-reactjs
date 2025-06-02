// src/components/DetailKonserComponent.js
import React from 'react';
import { Container, Row, Col, Image, Button, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DetailKonserComponent = ({ konserDetail }) => {
  if (!konserDetail) {
    return (
      <Container className="text-center my-5 detail-konser-error">
        <p>Detail konser tidak ditemukan.</p>
        <Link to="/konser">Kembali ke daftar konser</Link>
      </Container>
    );
  }

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="bi bi-star-fill star-icon"></i>);
    }
    if (halfStar) {
      stars.push(<i key="half" className="bi bi-star-half star-icon"></i>);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="bi bi-star star-icon"></i>);
    }
    return stars;
  };

  return (
    <Container className="detail-konser-page-wrapper my-4"> 
      <div className="detail-konser-content-wrapper">
        <Breadcrumb className="konser-breadcrumb">
          {konserDetail.breadcrumb.map((crumb, index) => (
            crumb.path ? (
              <Breadcrumb.Item key={index} linkAs={Link} linkProps={{ to: crumb.path }} className="breadcrumb-link">
                {crumb.name}
              </Breadcrumb.Item>
            ) : (
              <Breadcrumb.Item key={index} active className="breadcrumb-current">
                {crumb.name}
              </Breadcrumb.Item>
            )
          ))}
        </Breadcrumb>

        {/* Modifikasi di sini:
          1. Kolom spacer dihapus.
          2. Ukuran kolom konten dikembalikan ke proporsi awal (total 12 unit).
          3. Ditambahkan g-md-5 pada Row untuk gutter yang lebih besar namun terkontrol.
        */}
        <Row className="mb-5 main-info-section align-items-start g-md-5">
          {/* Kolom Poster */}
          <Col md={4} lg={4} className="mb-4 mb-md-0 poster-column">
            <Image src={konserDetail.posterImage} alt={konserDetail.title} fluid className="konser-detail-poster" />
          </Col>

          {/* Kolom Info Utama */}
          <Col md={5} lg={5} className="konser-main-info-text">
            <h1 className="konser-detail-title">{konserDetail.title}</h1>
            <div className="price-rating-container d-flex align-items-center my-3">
              <div className="price-info text-start">
                <span className="price-label d-block">Dimulai dari</span>
                <strong className="price-amount d-block">
                  {konserDetail.startingPrice}
                </strong>
              </div>
              <div className="separator-line mx-3"></div>
              <div className="rating-info">
                <div className="stars-display">
                  {renderStars(
                    konserDetail.ratingValue || konserDetail.ratingStars
                  )}
                </div>
                <span className="rating-details-text d-block">
                  ({konserDetail.ratingValue || konserDetail.ratingStars} Bintang) •{" "}
                  {konserDetail.reviewCount}
                </span>
              </div>
            </div>
          </Col>
          
          {/* Kolom Sidebar Info */}
          <Col md={3} lg={3} className="konser-sidebar d-flex flex-column">
            {/* Judul Seksi Tanggal dan Waktu */}
            <h5 className="sidebar-section-title">Tanggal dan waktu</h5>
            <div className="info-box date-time-box mb-4"> {/* Tambahkan mb-4 untuk jarak antar box */}
              <p className="info-box-main-text">{konserDetail.dateTime.date}</p>
              <p className="info-box-sub-text mb-0">{konserDetail.dateTime.time}</p>
            </div>

            {/* Judul Seksi Lokasi */}
            <h5 className="sidebar-section-title">Lokasi</h5>
            <div className="info-box location-box mb-4"> {/* Tambahkan mb-4 */}
              <div className="d-flex align-items-center location-content"> {/* align-items-center untuk ikon besar */}
                <i className="bi bi-geo-alt-fill location-icon"></i> {/* me-2 dihapus, diatur di CSS */}
                <div>
                  <p className="info-box-main-text location-venue-name mb-1">{konserDetail.location.venueName}</p>
                  <p className="info-box-sub-text mb-0 location-address">{konserDetail.location.address}</p>
                </div>
              </div>
            </div>

            <Button variant="primary" className="btn-beli-tiket w-100 mt-auto">Beli Tiket</Button>
          </Col>
        </Row>

        {/* ... (Seksi Peta, Foto Langsung, Tentang venue, Tentang artis tetap sama) ... */}
        <section className="detail-section map-section">
          <h3 className="section-heading"><b>Peta</b></h3>
          <div className="map-image-container">
            <Image src={konserDetail.mapImage || "https://via.placeholder.com/1200x350/f0f0f0/cccccc?text=Peta+Lokasi+Konser"} alt="Peta Lokasi Konser" fluid className="map-image" />
          </div>
        </section>

        <section className="detail-section photos-section">
          <h3 className="section-heading"><b>Foto Langsung</b></h3>
          <Row className="g-2"> 
            {konserDetail.livePhotos.map((photo, index) => (
              <Col key={index} xs={6} sm={4} md={3} lg={3}>
                <div className="live-photo-wrapper"> {/* Ukuran wrapper tetap dari CSS sebelumnya */}
                  <Image 
                    src={photo || `https://via.placeholder.com/250x150/f0f0f0/cccccc?text=Live+Photo+${index + 1}`} 
                    alt={`Live Photo ${index + 1}`} 
                    fluid 
                    className="live-photo-item" 
                  />
                </div>
              </Col>
            ))}
          </Row>
        </section>

        <section className="detail-section venue-section">
          <h3 className="section-heading"><b>Tentang venue</b></h3>
          <p className="info-text-block">{konserDetail.venueInfo}</p>
        </section>

        <section className="detail-section artist-section">
            <h3 className="section-heading"><b>Tentang artis</b></h3>
          <div className="artist-info-container">
        <Image 
          src={konserDetail.artistInfo.image} 
          alt={konserDetail.artistInfo.name} 
          roundedCircle /* roundedCircle dari Bootstrap bisa dipertahankan */
          className="artist-image" 
        />
        {/* Tambahkan span atau p untuk label "Artis" */}
        <span className="artist-label mt-2">Artis</span> 
        <span className="artist-name">{konserDetail.artistInfo.name}</span>
      </div>
        </section>
      </div>
    </Container>
  );
};

export default DetailKonserComponent;