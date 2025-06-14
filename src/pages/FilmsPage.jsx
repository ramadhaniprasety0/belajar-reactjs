import ErrorComponents from "../components/ErrorComponents";
import { Container, Row, Col } from "react-bootstrap";
import CarouselComponentFilm from "../components/CarouselComponentFilm";
import PopularComponentFilm from "../components/PopularComponentFilm";
import NewsFimlComponen from "../components/NewsFimlComponen";
import FilmBioskopComponent from "../components/FilmBioskopComponent"; 

const FilmsPage = () => {
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
            <div className="d-flex justify-content-between align-items-center">
            <h1>
              <b>Film Hits</b>
            </h1>
              <a href="/ticketfilms" className="btn btn-lihat-semua btn-sm">
                Lihat Semua
              </a>
            </div>
            <PopularComponentFilm />
          </Row>

          {/* Bioskop Terbaru */}
          <Row className="box-bioskop-terbaru p-3 m-1 mt-5">
            <div className="d-flex justify-content-between align-items-center">
            <h1>
              <b>Bioskop Terbaru</b>
            </h1>
              <a href="/ticketfilms" className="btn btn-lihat-semua btn-sm">
                Lihat Semua
              </a>
            </div>
            <FilmBioskopComponent />
          </Row>

          {/* Berita Hari Ini */}
          <Row className="box-berita mt-5">
            <h1>
              <b>Berita hari ini</b>
            </h1>
            <NewsFimlComponen />
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default FilmsPage;
