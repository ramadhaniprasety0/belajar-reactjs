import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import logo from "/findfun2.png";

const TicketMusicComponent = ({ ticket }) => {
  if (!ticket) {
    return <p className="text-center my-5">Data tiket tidak tersedia.</p>;
  }

  return (
    <div className="ticket-wrapper">
      <Container className="ticket-card">
        {/* Header */}
        <Row className="align-items-center py-2 px-5">
          <Col xs={9}>
            <h4 className="ticket-event-title">{ticket.eventName}</h4>
            <p className="ticket-order-code">Order Code: {ticket.orderCode}</p>
          </Col>
          <Col xs={3} className="text-end">
            <img 
              src={logo} 
              alt="Logo" 
              className="ticket-logo-custom img-fluid"
            />
          </Col>
        </Row>

        {/* Info Section */}
        <Row className="gx-3 gy-3 mt-3 d-flex flex-wrap py-2 px-4 ticket-main-row">
          {" "}
          {/* Tambahkan kelas 'ticket-main-row' */}
          {/* Kiri */}
          <Col
            md={4}
            xs={12}
            className="d-flex flex-column justify-content-between gap-3 ticket-col-left px-4" /* Tambahkan kelas 'ticket-col-left' */
          >
            <div className="ticket-boxed-info">
              <p className="ticket-label-info">Nama</p>
              <div className="ticket-value-info">{ticket.userName}</div>
            </div>

            <div className="ticket-boxed-info d-flex flex-column flex-md-row justify-content-between align-items-center h-100">
              <div className="ticket-seat-item text-center flex-fill">
                <p className="ticket-label-info">Seat</p>
                <div className="ticket-value-info">{ticket.seatNumber}</div>
              </div>
              <div className="vertical-divider d-none d-md-block" />
              <div className="ticket-seat-item text-center flex-fill">
                <p className="ticket-label-info">Section</p>
                <div className="ticket-value-info">{ticket.section}</div>
              </div>
              <div className="vertical-divider d-none d-md-block" />
              <div className="ticket-seat-item text-center flex-fill">
                <p className="ticket-label-info">Row</p>
                <div className="ticket-value-info">{ticket.rowNumber}</div>
              </div>
            </div>
          </Col>
          {/* Tengah */}
          <Col
            md={5}
            xs={12}
            className="d-flex flex-column gap-3 ticket-col-middle px-5"
          >
            {" "}
            <div className="ticket-boxed-info h-100">
              <div className="location-display-wrapper">
                <i className="bi bi-geo-alt-fill location-icon"></i>
                <div className="location-text-content">
                  <p className="ticket-location-name">{ticket.locationName}</p>
                  <p className="ticket-location-address">
                    {ticket.locationAddress}
                  </p>
                </div>
              </div>
            </div>
            <div className="ticket-boxed-info">
              <p className="ticket-date-text">{ticket.dateEvent}</p>
              {ticket.timeEvent && (
                <p className="ticket-time-text">{ticket.timeEvent}</p>
              )}
            </div>
          </Col>
          {/* Kanan (QR Code) */}
          <Col
            md={3}
            xs={12}
            className="d-flex justify-content-center align-items-center ticket-col-right" /* Tambahkan kelas 'ticket-col-right' */
          >
            <img
              src={ticket.qrCodeImage}
              alt="QR Code"
              className="ticket-qr img-fluid"
              style={{ maxHeight: "160px", objectFit: "contain" }}
            />
          </Col>
        </Row>
      </Container>

      {/* Unduh tombol */}
      <div className="text-center mt-3">
        <Button
          className="btn-download-ticket"
          href={ticket.downloadTicketLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-download me-2"></i>Unduh Tiket
        </Button>
      </div>
    </div>
  );
};

export default TicketMusicComponent;
