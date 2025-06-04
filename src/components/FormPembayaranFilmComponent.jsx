// src/components/FormPembayaranFilmComponent.js
import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Image,
  Form,
  Button,
  InputGroup,
  Modal,
  Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const HARGA_PER_KURSI = 40000;

const FormPembayaranFilmComponent = ({ film }) => {
  const [showSeatMapModal, setShowSeatMapModal] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState(new Set());

  const seatLayout = {
    rows: ["K", "J", "I", "H", "G", "F", "E", "D", "C", "B", "A"].reverse(),
    seatsPerRow: 15,
    takenSeats: new Set([
      "G5",
      "G6",
      "G7",
      "G8",
      "G9",
      "F6",
      "F7",
      "F8",
      "F9",
      "E6",
      "E7",
      "E8",
      "E9",
      "D3",
      "D4",
      "D5",
      "D6",
      "D7",
      "D8",
      "D9",
      "D10",
      "D11",
      "C5",
      "C6",
      "C7",
      "C8",
      "C9",
      "C10",
      "C11",
    ]),
  };
  const maxSeatsToSelect = selectedSeats.size > 0 ? selectedSeats.size : 1;

  useEffect(() => {}, [film]);

  if (!film) {
    return (
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "50vh" }}
      >
        <p className="text-center my-5 h5">
          Informasi film tidak ditemukan atau sedang memuat...
        </p>
      </Container>
    );
  }

  const handleShowSeatMapModal = () => setShowSeatMapModal(true);
  const handleCloseSeatMapModal = () => setShowSeatMapModal(false);

  const handleConfirmSeats = () => {
    if (selectedSeats.size === 0) {
      alert("Anda belum memilih kursi.");
      return;
    }
    console.log("Kursi yang dipilih:", Array.from(selectedSeats));
    handleCloseSeatMapModal();
  };

  const handleSeatClick = (seatId) => {
    if (seatLayout.takenSeats.has(seatId)) return;
    setSelectedSeats((prevSelectedSeats) => {
      const newSelectedSeats = new Set(prevSelectedSeats);
      if (newSelectedSeats.has(seatId)) {
        newSelectedSeats.delete(seatId);
      } else {
        newSelectedSeats.add(seatId); // Tidak ada batasan maksimal pemilihan
      }
      return newSelectedSeats;
    });
  };

  const calculateTotalPrice = () => {
    return selectedSeats.size * HARGA_PER_KURSI;
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const cancelLink = film.id ? `/film/${film.id}` : "#";
  const confirmPaymentLink = film.id
    ? `/konfirm-bayar-film/${film.id}`
    : "#";

  return (
    <Row className="pembayaran-film-wrapper my-4">
      <Col md={5} lg={4} className="info-film-col mb-4 mb-md-0">
        <Image
          src={film.posterImage}
          alt={film.title}
          fluid
          className="info-film-poster"
        />
        <h2 className="info-film-title mt-3 mb-1">{film.title}</h2>

        <div className="film-meta-info mt-2">
          <span className="info-film-type-subtitle">Bioskop</span>
          <span className="info-film-cinema-tag py-2">CGV</span>
        </div>

      </Col>

      <Col md={7} lg={8} className="form-pembayaran-col">
        <div className="form-pembayaran-card-2">
          <Form.Group className="mb-3" controlId="formNamaLengkap">
            <Form.Label className="form-card-label">Nama Lengkap</Form.Label>
            <Form.Control
              type="text"
              placeholder="Masukkan Nama Lengkap Anda"
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formAlamatEmail">
            <Form.Label className="form-card-label">Alamat email</Form.Label>
            <div className="input-with-icon-wrapper">
              <i className="bi bi-envelope input-embedded-icon"></i>
              <Form.Control
                type="email"
                placeholder="Contoh: halo@domain.com"
                className="input-with-embedded-icon"
              />
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formLokasiBioskop">
            <Form.Label className="form-card-label form-label-lokasi-bioskop">
              Lokasi Bioskop
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Masukkan Lokasi Bioskop"
              defaultValue={film.location?.venueName || ""}
              className="form-input-lokasi-bioskop"
            />
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-4"
            controlId="formTanggalWaktuNonton"
          >
            <Col md={6} className="mb-3 mb-md-0">
              <Form.Group controlId="formTanggalNontonInner">
                <Form.Label className="form-card-label form-label-tanggal-nonton">
                  Tanggal Nonton
                </Form.Label>
                <Form.Control
                  type="date"
                  defaultValue={film.dateTime?.date}
                  className="form-input-tanggal-nonton"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formWaktuNontonInner">
                <Form.Label className="form-card-label form-label-waktu-nonton">
                  Waktu Nonton
                </Form.Label>
                <Form.Control
                  type="time"
                  defaultValue={film.dateTime?.time}
                  className="form-input-waktu-nonton"
                />
              </Form.Group>
            </Col>
          </Form.Group>

          <h5 className="form-section-title">Pilih Kursi</h5>
          <div className="selected-seats-display mb-2">
            Kursi Dipilih:{" "}
            {selectedSeats.size > 0 ? (
              Array.from(selectedSeats).join(", ")
            ) : (
              <span className="text-muted fst-italic">
                Belum ada kursi dipilih
              </span>
            )}
          </div>
          <Button
            variant="primary"
            className="w-100 btn-pilih-kursi mb-4"
            onClick={handleShowSeatMapModal}
          >
            <i className="bi bi-diagram-3-fill me-2"></i>
            {selectedSeats.size > 0
              ? `Ubah Pilihan Kursi (${selectedSeats.size} kursi)`
              : `Pilih Kursi Anda`}
          </Button>

          {selectedSeats.size > 0 && (
            <div className="summary-section mt-4">
              <Row className="summary-item">
                <Col xs={8} sm={9}>
                  {selectedSeats.size} Kursi Dipilih
                </Col>
                <Col xs={4} sm={3} className="text-end">
                  {/* Anda bisa menampilkan detail harga per kursi jika mau */}
                </Col>
              </Row>
              <Row className="summary-total mt-2">
                <Col className="fw-bold">Total</Col>
                <Col className="text-end fw-bold">
                  {formatCurrency(calculateTotalPrice())}
                </Col>
              </Row>
            </div>
          )}

          <div className="payment-actions mt-5 d-flex justify-content-end">
            <Button
              as={Link}
              to={cancelLink}
              variant="outline-secondary"
              className="btn-batal me-2"
            >
              Batal
            </Button>
            <Button
              as={Link}
              to={confirmPaymentLink}
              variant="primary"
              className="btn-pembayaran"
              disabled={selectedSeats.size === 0}
            >
              Pembayaran
            </Button>
          </div>
        </div>
      </Col>

      {/* Modal untuk Pilih Kursi (struktur modal tetap sama) */}
      <Modal
        show={showSeatMapModal}
        onHide={handleCloseSeatMapModal}
        dialogClassName="seat-map-modal"
        scrollable={true}
        centered
      >
        <Modal.Header
          closeButton
          className="seat-map-modal-header"
        ></Modal.Header>
        <Modal.Body className="seat-map-modal-body">
          <div className="screen-indicator">
            <div className="screen-arc"></div>
            <div className="screen-text">SCREEN</div>
          </div>
          <div className="seat-map-grid">
            {seatLayout.rows.map((rowLabel) => (
              <div key={rowLabel} className="seat-row">
                <div className="row-label">{rowLabel}</div>
                <div className="seats-in-row">
                  {Array.from({ length: seatLayout.seatsPerRow }, (_, i) => {
                    const seatNumber = i + 1;
                    const seatId = `${rowLabel}${seatNumber}`;
                    const isTaken = seatLayout.takenSeats.has(seatId);
                    const isSelected = selectedSeats.has(seatId);
                    let seatStatus = "available";
                    if (isTaken) seatStatus = "taken";
                    if (isSelected) seatStatus = "selected";
                    return (
                      <Button
                        key={seatId}
                        variant="outline-secondary"
                        className={`seat ${seatStatus}`}
                        onClick={() => handleSeatClick(seatId)}
                        disabled={isTaken}
                      >
                        <span>{isTaken ? "X" : seatNumber}</span>
                      </Button>
                    );
                  })}
                </div>
                <div className="row-label">{rowLabel}</div>
              </div>
            ))}
          </div>
          <div className="seat-legend mt-3">
            <div className="legend-item">
              <span className="seat-example available"></span> Kursi Tersedia
            </div>
            <div className="legend-item">
              <span className="seat-example selected"></span> Pilihan Anda
            </div>
            <div className="legend-item">
              <span className="seat-example taken"></span> Kursi Terisi
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="seat-map-modal-footer">
          <Button
            variant="outline-secondary"
            className="btn-modal-batal"
            onClick={handleCloseSeatMapModal}
          >
            Batal
          </Button>
          <Button
            variant="primary"
            className="btn-modal-konfirmasi"
            onClick={handleConfirmSeats}
            disabled={selectedSeats.size === 0}
          >
            Konfirmasi Kursi ({selectedSeats.size})
          </Button>
        </Modal.Footer>
      </Modal>
    </Row>
  );
};

export default FormPembayaranFilmComponent;
