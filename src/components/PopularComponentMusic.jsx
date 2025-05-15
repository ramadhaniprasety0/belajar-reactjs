import { Col } from "react-bootstrap";
import { musicsTerbaru } from "../data/index";

const PopularComponentMusic = () => {
  return (
    <>
      {musicsTerbaru.map((musics) => {
        return (
          <Col lg={3} md={6} sm={12} className="music-popular-wrapper p-2">
            <div className="music-popular-card">
              <img
                src={musics.image}
                alt={musics.title}
                className="music-popular-image"
              />
              <div className="music-popular-info px-3 py-2">
                <p className="music-popular-title">{musics.title}</p>
                <p className="music-popular-artist">{musics.artist}</p>
                <div className="music-popular-controls d-flex justify-content-between px-1">
                  <div class="icon-group-left">
                    <i class="fa-solid fa-download"></i>
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-solid fa-ellipsis"></i>
                  </div>
                  <div class="icon-group-right">
                    <div class="play-button">
                      <i class="fa-solid fa-play"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        );
      })}
    </>
  );
};

export default PopularComponentMusic;
