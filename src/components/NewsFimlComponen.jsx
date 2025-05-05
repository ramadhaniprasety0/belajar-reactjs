import React from 'react';
import { Col } from 'react-bootstrap';
import { hotsNews } from '../data/index';

const NewsFimlComponen = () => {
    return (
        <>
          {hotsNews.map((hots, index) => {
                return (
                <Col lg={12}  key={index} className="mb-4">
                    <div className="news-card d-flex">
                    <img src={hots.image} alt="NewsBrand" className="img-brand"/>
                    <div className="news-caption d-flex flex-column justify-content-between">
                        <div>
                        <img src={hots.brandnews} alt="" srcset="" />
                        <h5>{hots.title}</h5>
                        <p>{hots.desc}</p>
                        </div>
                        <p className="text-white">{hots.time}</p>
                    </div>
                    </div>
                </Col>
                )
            })}
        </>
    );
};

export default NewsFimlComponen;