import {Container, Row, Col, Carousel, } from 'react-bootstrap';
import HeroImage from '../assets/img/hero.png';
import {kelasTerbaru, carouselItems, musickHits, hotsNews, filmsTerbaru} from '../data/index';
import PopularComponentFilm from '../components/PopularComponentFilm';


const CarouselComponent = ({ carouselItems }) => {
  return (
    <Col lg={12}>
      <Carousel indicators={true} controls={false}>
        {carouselItems.map((item) => {
          return (
            <Carousel.Item key={item.id}>
              <img src={item.image} alt="Carousel" height={433}/>
              <Carousel.Caption className='d-flex flex-column align-items-start gap-1 justify-content-center'>
                <img src={item.title} alt="Carousel Title" className='img-fluid' />
                <p className='text-white'>{item.description}</p>
                <a href={item.path} className="btn-seemore">See More</a>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Col>
  );
};

const NewsComponent = ({ hotsNews }) => {
  return (
    <>
      {hotsNews.map((hots, index) => {
        return (
          <Col lg={12}  key={index} className="mb-4">
            <div className="news-card d-flex">
              <img src={hots.image} alt="NewsBrand" className="img-brand"/>
              <div className="news-caption d-flex flex-column justify-content-between">
                <div>
                  <img src={hots.brandnews} alt="" srcset="" />
                  <h5>{hots.title}</h5>
                  <p>{hots.desc}</p>
                </div>
                  <p className="text-white">{hots.time}</p>
              </div>
            </div>
          </Col>
        );
      })}
    </>
  );
};

const HomePage = () => {
  return (
    <div>
      <header className='w-100 min-vh-100 d-flex align-items-center justify-content-center'>
        <Container>
          <div className='d-flex flex-column align-items-center'>
            <h1 className='montserrat-font fw-bold'>Welcome to FindFun!</h1>
            <p>Tempat dimana para cinephile dan audiophile saling bertemu secara online</p>
            <a href="#homepage" className='btn-explore mt-3'>Mulai Eksplorasi</a>
          </div>
        </Container>
      </header>
      <div className="homepage w-100 min-vh-100" id="homepage">
        <div>
          <Container>
          <Row className="header-box d-flex align-items-center p-3">
            <h1 className="fs-3 text-white text-start">Populer On FindFun</h1>
              <CarouselComponent carouselItems={carouselItems} className="rounded-4" />
          </Row>
          <Row className='p-3 m-4 box-hits d-flex align-items-center justify-content-center'>
              <Col lg={12}>
                <h1 className=" text-white fs-3">Today’s Biggest Hits</h1>
              </Col>
              {musickHits.map((hits) =>{
                return(
                  <Col lg={2} md={3} sm={6} className='p-1 d-flex justify-content-center'>
                  <div className='card-hits  p-3 rounded-4 position-relative' key={hits.id}>
                    <img src={hits.image} alt="" className='img-fluid' />
                    <a href={hits.path} className='link-icon'><i className={hits.icon}></i></a>
                    <h2>{hits.title}</h2>
                    <p>{hits.desc}</p>
                  </div>
                </Col>
                )
              })}
          </Row>
        </Container>
        </div>
      <div>
        <Container>
          <Row className='box-hots-news p-3'>
            <Col lg={12} className='mb-4'>
              <h1>Whats going on?</h1>
            </Col>
            <NewsComponent hotsNews={hotsNews} />
            <Col lg={12} md={6} sm={12}>
              <p className='fw-bold text-white'>See more</p>
            </Col>
          </Row>
        </Container>
      </div>

      <div>
        <Container>
          <Row className='p-3 ms-3 me-3 mt-4 box-hits'>
            <Col lg={12}>
              <h1 className=" text-white fs-3">Check also</h1>
            </Col>
            <PopularComponentFilm />
          </Row>
        </Container>
      </div>
     </div>
    </div>
  )
}

export default HomePage