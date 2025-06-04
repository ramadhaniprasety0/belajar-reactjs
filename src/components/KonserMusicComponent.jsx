// src/components/KonserMusicComponent.js
import React from "react";
import { Col } from 'react-bootstrap';
import { konserTerbaru } from '../data/index';
import { Link } from "react-router-dom"; // Pastikan Link diimpor
// import './KonserMusicComponent.css'; // Jika ada CSS spesifik

const KonserMusicComponent = ({ limit }) => {
  const displayedKonser = limit ? konserTerbaru.slice(-limit).reverse() : konserTerbaru.slice().reverse();

  const limitDescriptionWords = (description, wordLimit) => {
    if (!description) {
      return "Deskripsi tidak tersedia.";
    }
    const words = description.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return description;
  };

  return (
    <>
      {displayedKonser.map((konser) => {
        const truncatedDesc = limitDescriptionWords(konser.description, 5);

        return (
          <Col key={konser.id} lg={3} md={6} sm={12} className='card-konser-musics p-2'>
            <Link 
              to={`/konser/${konser.id}`} 
              className="text-decoration-none text-dark" 
            >
              <div className='card-music'> 
                <div className='card-music-img'>
                  <img src={konser.image} alt={konser.title} className='img-fluid mb-2'/>
                </div>
                <div className='card-music-caption'>
                  <p className='heading'>{konser.title}</p>
                  <p>{truncatedDesc}</p>
                </div>
              </div>
            </Link>
          </Col>
        );
      })}
    </>
  );
};

export default KonserMusicComponent;