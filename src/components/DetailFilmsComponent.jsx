import React from "react";
import { Button } from "react-bootstrap";
import "../dist/css/main.css";

const DetailFilmComponent = ({ film }) => {
  return (
    <>
      <div className="row detail-film-page d-flex flex-column flex-md-row align-items-start gap-4">
        {/* Poster di kiri */}
        <div className="col-auto">
          <div className="poster-section text-center mb-4 mb-md-0">
            <img
              src={film.poster}
              alt={film.title}
              className="img-fluid rounded shadow-sm"
            />
            <div className="btn-double-group d-flex w-100">
              {/* Dropdown Nikmati Film */}
              <div className="dropdown btn-film-container">
                <button
                  className="btn-film dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  NIKMATI FILM
                </button>
                <ul className="dropdown-menu w-100 text-center">
                  <li>
                    <a
                      className="dropdown-item"
                      href={film.netflixUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-tv me-2"></i>Netflix
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href={film.primeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-play-btn me-2"></i>Prime Video
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href={film.disneyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-film me-2"></i>Disney+
                    </a>
                  </li>
                </ul>
              </div>

              {/* Tombol Trailer */}
              <a
                href={film.trailerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-trailer"
              >
                <i className="bi bi-play-circle-fill me-1"></i> Trailer
              </a>
            </div>
          </div>
        </div>

        {/* Info film di tengah */}
        <div className="col">
          <div className="info-section flex-grow-1">
            <h3>{film.title}</h3>
            <p className="text-muted">
              {film.year}
              <br />
              Directed by {film.director}
            </p>
            <div className="mb-3">
              {film.genre.map((g, index) => (
                <span key={index} className="badge-genre me-2 mb-1">
                  {g}
                </span>
              ))}
            </div>
            <p>{film.description}</p>
          </div>
        </div>

        {/* Interaksi pengguna di kanan */}
        <div className="col-auto ms-md-auto">
          <div className="interaction-section text-center">
            {/* Baris Ikon Atas */}
            <div className="icon-row">
              <span>
                <div className="small">Ditonton</div>
                <i className="bi bi-check-circle-fill fs-4"></i>
              </span>
              <span>
                <div className="small">Suka</div>
                <i className="bi bi-heart fs-4"></i>
              </span>
            </div>

            {/* Rating */}
            <div>
              <div className="label mt-2">Bintang</div>
              <div className="rating">★ ★ ☆ ☆ ☆</div>
            </div>

            {/* Ulasan */}
            <div>
              <div className="label mt-2">Lihat ulasan</div>
              <div className="interaction-icon">
                <i className="bi bi-pencil-square"></i>
              </div>
            </div>

            {/* Bagikan */}
            <div>
              <div className="label mt-2">Bagikan</div>
              <div className="interaction-icon">
                <i className="bi bi-share"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pemeran */}
      {film.cast && (
        <div className="cast-section mt-5">
          <h5 className="mb-3">Pemeran</h5>
          <div className="row">
            {film.cast.map((actor, idx) => (
              <div key={idx} className="col-6 col-md-3 mb-4">
                <div className="card text-center h-100">
                  <img
                    src={actor.image}
                    alt={actor.name}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <p className="fw-bold mb-1">{actor.name}</p>
                    <p className="text-muted small">{actor.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default DetailFilmComponent;
