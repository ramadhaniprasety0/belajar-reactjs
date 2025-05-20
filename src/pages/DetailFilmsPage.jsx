import { useParams } from "react-router-dom";
import { detailFilms } from "../data";
import DetailFilmComponent from "../components/DetailFilmsComponent";
import Carousel from "react-bootstrap/Carousel";
import { Container } from "react-bootstrap";
import '../dist/css/main.css';


const DetailFilmPage = () => {
  const { id } = useParams();
  const film = detailFilms.find((item) => item.id === parseInt(id));

  if (!film) {
    return (
      <div className="w-100 min-vh-100 d-flex justify-content-center align-items-center">
        <h2>Film tidak ditemukan</h2>
      </div>
    );
  }

  return (
    <div className="w-100 min-vh-100 detail-film-page">
      <Container>
        {/* Carousel hanya menampilkan gambar hero dari film */}
        <div className="box-carousel-film mt-4 mb-4">
          <Carousel controls={false} indicators={false}>
            <Carousel.Item>
              <img
                className="d-block w-100 rounded-4"
                src={film.heroImage || film.poster}
                alt={film.title}
                style={{ maxHeight: "400px", objectFit: "cover" }}
              />
            </Carousel.Item>
          </Carousel>
        </div>

        {/* Komponen detail film */}
        <DetailFilmComponent film={film} />
      </Container>
    </div>
  );
};

export default DetailFilmPage;
