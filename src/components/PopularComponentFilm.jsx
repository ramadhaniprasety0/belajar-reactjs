import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { filmsTerbaru } from '../data/index';

const PopularComponentFilm = () => {
  return (
    <>
      {filmsTerbaru.map((films, index) => (
        <Col key={films.id || index} lg={3} md={6} sm={12} className='card-populer-films p-2'>
          <Link to={`/films/${films.id}`} className="text-decoration-none text-dark">
            <div className='card-film'>
              <div className='card-film-img'>
                <img src={films.image} alt={films.title} className='img-fluid mb-2' />
              </div>
              <div className='card-film-caption'>
                <p className='heading'>{films.title}</p>
                <p className="small">Klik untuk melihat detail lengkap</p>
              </div>
            </div>
          </Link>
        </Col>
      ))}
    </>
  );
};

export default PopularComponentFilm;
