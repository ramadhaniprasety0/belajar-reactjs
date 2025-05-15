import React from "react";
import { Col, Carousel } from "react-bootstrap";
import { carouselMusicItems } from "../data/index";

const CarouselComponentMusic = () => {
  return (
    <Col lg={12}>
      <Carousel indicators={true} controls={false}>
        {carouselMusicItems.map((item) => {
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

export default CarouselComponentMusic;