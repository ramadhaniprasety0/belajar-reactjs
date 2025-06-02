import React, { useState, useEffect } from "react";
import { Row, Col, Image, Form, Button, InputGroup } from "react-bootstrap";

const FormPembayaranComponent = ({ konser }) => {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [ticketQuantity, setTicketQuantity] = useState(1);

  useEffect(() => {
    // Set default selected ticket ke yang tersedia pertama jika ada
    const availableTicket = konser?.ticketCategories.find(
      (t) => t.status === "Tersedia"
    );
    if (availableTicket) {
      setSelectedTicket(availableTicket.id);
    }
  }, [konser]);

  if (!konser) {
    return (
      <p className="text-center my-5">Informasi konser tidak ditemukan.</p>
    );
  }

  const handleQuantityChange = (amount) => {
    setTicketQuantity((prev) => Math.max(1, prev + amount)); // Minimal 1 tiket
  };

  const calculateTotalPrice = () => {
    const ticket = konser.ticketCategories.find((t) => t.id === selectedTicket);
    if (ticket) {
      return ticket.price * ticketQuantity;
    }
    return 0;
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);
  };

  return (
    <Row className="pembayaran-konser-wrapper">
      <Col md={5} lg={4} className="info-konser-col mb-4 mb-md-0">
        <Image
          src={konser.posterImage}
          alt={konser.title}
          fluid
          className="info-konser-poster"
        />
        <h2 className="info-konser-title mt-3 mb-4">{konser.title}</h2>

        {/* Seksi Lokasi */}
        <h5 className="info-section-label">Lokasi</h5>
        <div className="info-display-box location-box-content mb-3">
          <i className="bi bi-geo-alt-fill info-box-icon"></i>
          {/* Asumsi konser.location adalah string nama tempat, atau sesuaikan dengan struktur data Anda */}
          {/* Misalnya: konser.locationInfo.venueName */}
          <span className="info-box-text">{konser.location?.venueName || konser.location || "Informasi Lokasi"}</span>
        </div>

        {/* Seksi Tanggal dan Waktu */}
        <h5 className="info-section-label">Tanggal dan waktu</h5>
        <div className="info-display-box datetime-box-content">
          <span className="info-box-date">{konser.dateTime?.date || "Tanggal Acara"}</span>
          <span className="info-box-time">{konser.dateTime?.time || "Waktu Acara"}</span>
        </div>
      </Col>

      <Col md={7} lg={8} className="form-pembayaran-col">
        <div className="form-pembayaran-card">
          <Form.Group className="mb-3">
            <Form.Label className="form-card-label">Nama Lengkap</Form.Label>
            <Form.Control type="text" placeholder="Nama Lengkap Anda" />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label className="form-card-label">Alamat email</Form.Label>
            <div className="input-with-icon-wrapper">
              <i className="bi bi-envelope input-embedded-icon"></i>
              <Form.Control
                type="email"
                placeholder="Halo@"
                className="input-with-embedded-icon"
              />
            </div>
          </Form.Group>

          <h5 className="form-section-title">Pilih area Anda</h5>
          {konser.ticketCategories.map((ticket) => (
            <div
              key={ticket.id}
              className={`ticket-option ${
                ticket.status !== "Tersedia" ? "disabled" : ""
              } ${selectedTicket === ticket.id ? "selected" : ""}`}
              onClick={() =>
                ticket.status === "Tersedia" && setSelectedTicket(ticket.id)
              }
            >
              <Form.Check
                type="radio"
                id={`ticket-${ticket.id}`}
                name="ticketOption"
                checked={selectedTicket === ticket.id}
                disabled={ticket.status !== "Tersedia"}
                onChange={() => setSelectedTicket(ticket.id)}
                className="visually-hidden" 
              />
              <div className="ticket-icon-wrapper">
                <i className="bi bi-ticket-perforated"></i>{" "}
              </div>
              <div className="ticket-info">
                <span className="ticket-name">{ticket.name}</span>
                <span className="ticket-price">
                  {ticket.currency} {ticket.price.toLocaleString("id-ID")}
                </span>
              </div>
              <div className="ticket-action">
                {ticket.status === "Tersedia" ? (
                  <>
                    {" "}
                    {selectedTicket ===
                      ticket.id && (
                      <>
                        <span className="quantity-label">Jumlah</span>
                        <div className="quantity-controls">
                          <Button
                            variant="link"
                            className="quantity-btn"
                            onClick={(e) => {
                              e.stopPropagation(); 
                              handleQuantityChange(-1);
                            }}
                            disabled={ticketQuantity <= 1} 
                          >
                            -
                          </Button>
                          <span className="quantity-display mx-2">
                            {ticketQuantity}
                          </span>
                          <Button
                            variant="link"
                            className="quantity-btn"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleQuantityChange(1);
                            }}
                          >
                            +
                          </Button>
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <div className="ticket-status-badge sold-out">
                    Tiket Habis
                  </div>
                )}
              </div>
            </div>
          ))}

          {selectedTicket &&
            konser.ticketCategories.find((t) => t.id === selectedTicket)
              ?.status === "Tersedia" && (
              <div className="summary-section mt-4">
                <Row className="summary-item">
                  <Col xs={6} sm={7}>
                    {
                      konser.ticketCategories.find(
                        (t) => t.id === selectedTicket
                      )?.name
                    }{" "}
                  </Col>
                  <Col xs={2} sm={1} className="text-center">
                    {ticketQuantity}
                  </Col>
                  <Col xs={4} sm={4} className="text-end">
                    {formatCurrency(
                      konser.ticketCategories.find(
                        (t) => t.id === selectedTicket
                      )?.price * ticketQuantity
                    )}
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
            {" "}
            {/* d-flex justify-content-end untuk align kanan */}
            <Button variant="outline-secondary" className="btn-batal me-2">
              Batal
            </Button>
            <Button variant="primary" className="btn-pembayaran">
              Pembayaran
            </Button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default FormPembayaranComponent;
