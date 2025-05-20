import { Container, Row, Col } from "react-bootstrap";
import CarouselComponentFilm from "../components/CarouselComponentFilm";
import TicketFilms from "../components/TicketFilmsComponent";
import PopularComponentFilm from "../components/PopularComponentFilm";

const TicketFilmsPage = () => {
  return (
    <div className="w-100 min-vh-100 homepage-films">
      <div>
        <Container>
          <Row className="box-carousel-films  d-flex justify-content-center mt-4">
            <CarouselComponentFilm className="rounded-4" />
          </Row>
          <Row>
            <h1 className="h1-ticketfilms mt-5 mb-5 text-center">
              <b>Sedang Tayang di Bioskop</b>
            </h1>
            <TicketFilms />
          </Row>
          <Row>
            <h1 className="h1-ticketfilms mt-5 mb-4 text-center">
              <b>Film Favorit untuk Streaming</b>
            </h1>
            <PopularComponentFilm />
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default TicketFilmsPage;
