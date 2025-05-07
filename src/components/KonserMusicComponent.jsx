import { Col, Row } from 'react-bootstrap';
import { konserTerbaru } from '../data/index';

const KonserMusicComponent = () => {
    return (
        <>
            {konserTerbaru.map((musics) => {
                return(
                    <Col lg={3} md={6} sm={12} className='card-konser-musics p-2'>
                        <div className='card-music'>
                            <div className='card-music-img'>
                                <img src={musics.image} alt="musics" className='img-fluid mb-2'/>
                            </div>
                            <div className='card-music-caption'>
                                <p className='heading'>{musics.title}</p>
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

export default KonserMusicComponent;
