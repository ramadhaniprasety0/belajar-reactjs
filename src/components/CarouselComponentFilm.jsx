import React from "react";
import { Col, Carousel } from "react-bootstrap";
import { carouselItems } from "../data/index";

const CarouselComponentFilm = () => {
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
                <a href={item.path} className="btn-seemore">Lihat</a>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Col>
  );
};

export default CarouselComponentFilm;