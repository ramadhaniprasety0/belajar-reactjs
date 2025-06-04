import React, { useState } from "react";
import { Col, Row, Card } from "react-bootstrap"; // Make sure Card is imported
import { bioskopData } from "../data"; // Importing the bioskop data
import DatePicker from "react-datepicker"; // Importing DatePicker
import "react-datepicker/dist/react-datepicker.css"; // Importing CSS for DatePicker
import { showtimes } from "../data"; // Importing showtimes
import { Link } from "react-router-dom";

const DetailTiketFilmsComponent = ({ detailTiketFilms }) => {
  const [selectedBioskop, setSelectedBioskop] = useState(""); // State for selected bioskop
  const [selectedLocation, setSelectedLocation] = useState(""); // State for selected location
  const [selectedDate, setSelectedDate] = useState(null); // State for selected date
  const [selectedTime, setSelectedTime] = useState(""); // State for selected time

  // Handle bioskop selection (button click)
  const handleBioskopClick = (name) => {
    setSelectedBioskop(name); // Update selected bioskop on button click
    setSelectedLocation(""); // Reset location when bioskop changes
  };

  // Handle location selection change (dropdown)
  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  // Handle date change (datepicker)
  const handleDateChange = (date) => {
    setSelectedDate(date); // Update selected date
  };

  // Handle time selection change (dropdown)
  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  // Get all locations from all bioskops
  const allLocations = bioskopData.flatMap((bioskop) => bioskop.locations);

  // Get locations of the selected bioskop
  const selectedBioskopLocations =
    bioskopData.find((bioskop) => bioskop.name === selectedBioskop)
      ?.locations || [];

  const renderStars = (rating) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < rating ? "filled-star" : "empty-star"}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="detail-tiket-films">
      <p className="mt-4">Film - Detail</p>
      <Row className="gap-3">
        <Col className="column1-detailtiketfilms col-3">
          <h1 className="fw-bold">{detailTiketFilms.title}</h1>
          <div className="rating-price d-flex">
            <div className="price">
              <h6>{detailTiketFilms.price}</h6>
            </div>
            <div className="rating">
              <div>{renderStars(detailTiketFilms.rating)}</div>
              <h6>{`(${detailTiketFilms.rating} Bintang) • ${detailTiketFilms.ulasan} Ulasan`}</h6>
            </div>
          </div>
          <p className="p-detail">Detail</p>
          <p className="p-description">{detailTiketFilms.description}</p>
        </Col>
        <Col className="column2-detailtiketfilms col-4">
          <img
            src={detailTiketFilms.image}
            alt={detailTiketFilms.title}
            className="w-75 img-fluid"
          />
        </Col>
        <Col className="column3-detailtiketfilms col-3">
          <div>
            <h6>Bioskop</h6>
            <div className="bioskop-buttons">
              {bioskopData.map((bioskop) => (
                <button
                  key={bioskop.name}
                  className={`bioskop-button ${
                    selectedBioskop === bioskop.name ? "active" : ""
                  }`}
                  onClick={() => handleBioskopClick(bioskop.name)}
                >
                  {bioskop.name}
                </button>
              ))}
            </div>

            <div className="lokasi-dropdown">
              <h6>Lokasi</h6>
              <select
                value={selectedLocation}
                onChange={handleLocationChange}
                className="form-control select-location"
              >
                <option value="">Lokasi</option>
                {(selectedBioskop
                  ? selectedBioskopLocations
                  : allLocations
                ).map((location, index) => (
                  <option key={index} value={location}>
                    {location}
                  </option>
                ))}
              </select>
              <div className="date-time d-flex">
                {/* Date Picker */}
                <div className="date-picker">
                  <h6>Tanggal</h6>
                  <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="dd/MM/yyyy"
                    className="form-control DatePicker"
                    placeholderText="Tanggal"
                  />
                </div>

                {/* Time Picker */}
                <div className="time-picker">
                  <h6>Waktu</h6>
                  <select
                    value={selectedTime}
                    onChange={handleTimeChange}
                    className="form-control TimePicker"
                  >
                    <option value="">Waktu</option>
                    {showtimes.map((time, index) => (
                      <option key={index} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="button-container ">
              <Link to="/pembayarantiketfilm" className="buy-ticket-link">
                <button className="buy-ticket-btn">Beli Tiket</button>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
      <div className="trailer-crew">
        <h6>Video & Trailer</h6>
        <div className="trailer-container">
          {/* Loop through cast array */}
          {detailTiketFilms.trailer.map((trailer, index) => (
            <a
              href={trailer.LinkTrailer}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card
                key={index}
                style={{ width: "316px", height: "200px" }}
                className="card-trailer"
              >
                <Card.Img src={trailer.image} className="img-trailerfilms" />
              </Card>
            </a>
          ))}
        </div>

        <h6>Daftar Pemain & Kru</h6>
        <div className="crew-container">
          {/* Loop through cast array */}
          {detailTiketFilms.cast.map((actor, index) => (
            <Card
              key={index}
              style={{ width: "158px", height: "280px" }}
              className="card-kru"
            >
              <Card.Img
                variant="top"
                src={actor.image} // Access actor image
                className="img-krufilms"
              />
              <Card.Body className="card-body-detailtiketfilms">
                <h5>{actor.name}</h5>
                <p>{actor.role}</p>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailTiketFilmsComponent;
