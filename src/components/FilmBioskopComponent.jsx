import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BioskopFIlms } from "../data/index";

const FilmsBioskopComponent = () => {
  const chunkedFilms = [];

  for (let i = 0; i < BioskopFIlms.length; i += 2) {
    chunkedFilms.push(BioskopFIlms.slice(i, i + 2));
  }

  return (
    <>
      {chunkedFilms.map((filmPair, rowIndex) => (
        <Row key={rowIndex} className="gx-2 mb-4 mt-3">
          {filmPair.map((films, index) => (
            <Col lg={6} md={12} key={films.id || index}>
              <div className="bioskop-film-row d-flex overflow-hidden">
                <div className="bioskop-film-img-col">
                  <div className="bioskop-image-wrapper h-100">
                    <img
                      src={films.image}
                      alt={films.title}
                      className="img-fluid bioskop-film-image"
                    />
                  </div>
                </div>
                <div className="bioskop-film-info-col">
                  <div className="bioskop-film-info-card d-flex flex-column justify-content-center">
                    <span className="bioskop-film-genre">{films.genre}</span>
                    <h3 className="bioskop-film-title">{films.title}</h3>
                    <p className="bioskop-film-desc">{films.description}</p>
                    <Link to={`/detailtiketfilms/${films.id}`} className="bioskop-film-link">
                      Lihat <span className="bioskop-arrow">›</span>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      ))}
    </>
  );
};

export default FilmsBioskopComponent;
