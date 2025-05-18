import { useParams } from "react-router-dom";
import { musicsTerbaru } from "../data";
import DetailMusicsComponent from "../components/DetailMusicsComponent";
import Carousel from "react-bootstrap/Carousel";
import { Container } from "react-bootstrap";

const DetailMusicsPage = () => {
  const { id } = useParams();
  const music = musicsTerbaru.find((item) => item.id === parseInt(id));

  if (!music) {
    return (
      <div className="w-100 min-vh-100 d-flex justify-content-center align-items-center">
        <h2>Musik tidak ditemukan</h2>
      </div>
    );
  }

  return (
    <div className="w-100 min-vh-100 detail-lagu-page">
      <Container>
        {/* Carousel hanya 1 gambar dari lagu yang dibuka */}
        <div className="box-carousel-musics mt-4 mb-4">
          <Carousel controls={false} indicators={false}>
            <Carousel.Item>
              <img
                className="d-block w-100 rounded-4"
                src={music.carouselImage || music.image}
                alt=""
                style={{ maxHeight: "400px", objectFit: "cover" }}
              />
            </Carousel.Item>
          </Carousel>
        </div>

        {/* Komponen detail lagu */}
        <DetailMusicsComponent music={music} />
      </Container>
    </div>
  );
};

export default DetailMusicsPage;
