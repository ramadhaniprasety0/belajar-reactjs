// src/components/UlasanPopulerComponent.js
import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UlasanPopulerData } from '../data/index';

const UlasanPopulerComponent = () => {
  return (
    <>
      {UlasanPopulerData.map((review) => {
        return (
          <Col lg={6} md={12} key={review.id} className="mb-4">
            <div className="review-card h-100">
              <div>
                <div className="review-header">
                  <img
                    src={review.image}
                    alt={`${review.title} Poster`}
                    className={`review-poster ${review.type === 'music' ? 'album' : ''}`}
                  />
                  <div className="review-meta">
                    <h3 className="review-title">{review.title}</h3>
                    <p className="review-year">{review.artist ? review.artist : review.year}</p>
                    <p className="review-director">
                      {review.director ? `Disutradarai oleh ${review.director}` : review.year}
                    </p>
                  </div>
                </div>
                <div className="review-body">
                  <div className="reviewer-info">
                    <div className={`reviewer-avatar avatar-${review.avatarColor}`}></div>
                    <span className="reviewer-name">{review.reviewer}</span>
                    <span className="review-rating">{review.rating}</span>
                  </div>
                  <p className="review-text">
                    {review.text}{' '}
                    <Link to={`/ulasan/${review.id}`} className="review-see-more">
                      Lihat Selengkapnya
                    </Link>
                  </p>
                </div>
              </div>
              <div className="review-footer">
                <span className="review-footer-item">
                  <i className="bi bi-hand-thumbs-down-fill me-1"></i> {review.dislikes}
                </span>
                <span className="review-footer-item">
                  <i className="bi bi-hand-thumbs-up-fill me-1"></i> {review.likes}
                </span>
                <span className="review-footer-item bermanfaat">Bermanfaat
                </span>
              </div>
            </div>
          </Col>
        );
      })}
    </>
  );
};

export default UlasanPopulerComponent;