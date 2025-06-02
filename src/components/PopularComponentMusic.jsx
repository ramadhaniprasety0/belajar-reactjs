import React from "react";
import { Link } from "react-router-dom";
import { musicsTerbaru } from "../data/index"; 

const PopularComponentMusic = ({ limit = 10 }) => {
  const displayedMusics = musicsTerbaru.slice(-limit).reverse();

  return (
    <div className="horizontal-scroll-wrapper">
      <div className="horizontal-scroll-content">
        {displayedMusics.map((music) => (
          <div key={music.id} className="music-popular-item-scroll">
            <Link
              to={`/Musics/${music.id}`} 
              className="text-decoration-none"
            >
              <div className="music-popular-card">
                <img
                  src={music.image}
                  alt={music.title}
                  className="music-popular-image"
                />
                <div className="music-popular-info"> 
                  <p className="music-popular-title">{music.title}</p>
                  <p className="music-popular-artist">{music.artist}</p>
                  <div className="music-popular-controls">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularComponentMusic;