import React from "react";
import { useParams } from "react-router-dom";
import { musicsTerbaru } from "../data";
import "../dist/css/main.css";

const DetailLagu = () => {
  const { id } = useParams();
  const music = musicsTerbaru.find((m) => m.id === parseInt(id));

  if (!music) {
    return <div className="text-center mt-5">Lagu tidak ditemukan.</div>;
  }

  return (
    <div className="detail-lagu-page">
      <div className="container detail-lagu-content">
        <div className="row">
          {/* Kolom Gambar Lagu */}
          <div className="col-md-3 mb-4 mb-md-0">
            <img
              src={music.image}
              alt={music.title}
              className="detail-cover-image"
            />
          </div>

          {/* Kolom Info Lagu dan Lirik */}
          <div className="col-md-6 detail-lagu-info mb-4 mb-md-0">
            <p className="detail-lagu-label">MUSIK</p>
            <h2 className="detail-lagu-title">{music.title}</h2>
            <p className="detail-lagu-subinfo">
              <strong> {music.album}</strong> - {music.year}
            </p>
            <div className="mb-2">
              {music.genre.map((g, idx) => (
                <span key={idx} className="badge-genre">
                  {g}
                </span>
              ))}
            </div>
            <div className="detail-lagu-lyrics">{music.lyrics}</div>
          </div>

          {/* Kolom Artis dan Aksi */}
          <div className="col-md-3 detail-artis-box text-center">
            <div className="detail-artis-info d-flex align-items-center">
              <img
                src={music.artistImage}
                alt={music.artist}
                className="detail-artis-image"
              />
              <div className="detail-artis-text ms-3 d-flex flex-column justify-content-between">
                <p className="detail-artis-label mb-1">Artis</p>
                <h5 className="detail-artis-nama mt-auto">{music.artist}</h5>
              </div>
            </div>
            {/* Tombol dropdown Dengarkan Lagu */}
            <div className="btn-double-group d-flex w-100">
              <div className="dropdown btn-lagu-container">
                <button
                  className="btn-lagu dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  DENGARKAN LAGU
                </button>
                <ul className="dropdown-menu w-100 text-center">
                  <li>
                    <a
                      className="dropdown-item"
                      href={music.spotifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-spotify me-2"></i>Spotify
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href={music.appleMusicUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-apple me-2"></i>Apple Music
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href={music.ytMusicUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-youtube me-2"></i>YouTube Music
                    </a>
                  </li>
                </ul>
              </div>

              <a
                href={music.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-mv"
              >
                <i className="bi bi-play-circle-fill me-1"></i> MV
              </a>
            </div>
            {/* Tombol lainnya */}
            <a href="#" className="detail-button2">
              KONSER TERDEKAT
            </a>
            <a href="#" className="detail-button2">
              LIHAT ULASAN
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailLagu;
