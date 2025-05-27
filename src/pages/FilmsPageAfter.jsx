import ErrorComponents from "../components/ErrorComponents";
import { Container, Row, Col } from "react-bootstrap";
import CarouselComponentFilm from "../components/CarouselComponentFilm";
import PopularComponentFilm from "../components/PopularComponentFilm";
import UlasanPopulerComponent from "../components/UlasanPopulerComponent";
import NewsFimlComponen from "../components/NewsFimlComponen";
import FilmBioskopComponent from "../components/FilmBioskopComponent"; 

const FilmsPageAfter = () => {
  return (
    <div className="w-100 min-vh-100 homepage-films">
      <div>
        <Container>
          {/* Carousel Film Populer */}
          <Row className="box-carousel-films d-flex justify-content-center">
            <h1 className="mt-4">
              <b>Film Populer di FindFun</b>
            </h1>
            <CarouselComponentFilm className="rounded-4" />
          </Row>

          {/* Film Hits */}
          <Row className="box-populer-films p-3 m-1 mt-5">
            <h1>
              <b>Film Hits</b>
            </h1>
            <PopularComponentFilm />
          </Row>

          {/* Bioskop Terbaru */}
          <Row className="box-bioskop-terbaru p-3 m-1 mt-5">
            <h1>
              <b>Bioskop Terbaru</b>
            </h1>
            <FilmBioskopComponent />
          </Row>

          {/* Berita Hari Ini */}
            <Row className="box-hots-news p-3">
              <Col lg={12} className="mb-3">
                <h1>
                  <b>Ulasan Populer</b>
                </h1>
              </Col>
              <UlasanPopulerComponent />
            </Row>
        </Container>
      </div>
    </div>
  );
};

export default FilmsPageAfter;
