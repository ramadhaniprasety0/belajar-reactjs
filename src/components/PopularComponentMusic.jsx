import { Col } from "react-bootstrap";
import { musicsTerbaru } from "../data";
import { Link } from "react-router-dom";

const PopularComponentMusic = () => {
  return (
    <>
      {musicsTerbaru.map((musics) => (
        <Col key={musics.id} lg={3} md={6} sm={12} className="music-popular-wrapper p-2">
          <Link to={`/Musics/${musics.id}`} className="text-decoration-none text-light">
            <div className="music-popular-card">
              <img src={musics.image} alt={musics.title} className="music-popular-image" />
              <div className="music-popular-info px-3 py-2">
                <p className="music-popular-title">{musics.title}</p>
                <p className="music-popular-artist">{musics.artist}</p>
                <div className="music-popular-controls d-flex justify-content-between px-1">
                  <div className="icon-group-left">
                    <i className="fa-solid fa-download"></i>
                    <i className="fa-regular fa-heart"></i>
                    <i className="fa-solid fa-ellipsis"></i>
                  </div>
                  <div className="icon-group-right">
                    <div className="play-button">
                      <i className="fa-solid fa-play"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </Col>
      ))}
    </>
  );
};

export default PopularComponentMusic;
