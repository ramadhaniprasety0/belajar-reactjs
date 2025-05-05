import { Col, Row } from 'react-bootstrap';
import { filmsTerbaru } from '../data/index';

const PopularComponentFilm = () => {
    return (
        <>
            {filmsTerbaru.map((films) => {
                return(
                    <Col lg={3} md={6} sm={12} className='card-populer-films p-2'>
                        <div className='card-film'>
                            <div className='card-film-img'>
                                <img src={films.image} alt="films" className='img-fluid mb-2'/>
                            </div>
                            <div className='card-film-caption'>
                                <p className='heading'>{films.title}</p>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, praesentium?</p>
                                <a href="#" className='btn btn-dark'>See More <i className="fa-solid fa-play text-danger"></i></a>
                            </div>
                        </div>
                    </Col>
                )
            })}
        </>
    );
};

export default PopularComponentFilm;
