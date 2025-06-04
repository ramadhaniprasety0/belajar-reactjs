import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import logo from "/findfun2.png"; // Pastikan path logo ini benar

const TicketFilmComponent = ({ ticket }) => {
  if (!ticket) {
    return <p className="text-center my-5">Data tiket tidak tersedia.</p>;
  }

  return (
    <div className="ticket-wrapper"> {/* Wrapper untuk seluruh halaman tiket jika perlu centering */}
      <Container className="ticket-card"> {/* Kelas utama untuk styling kartu tiket */}
        {/* Header Tiket */}
        <Row className="align-items-center py-2 px-5">
          <Col xs={9}>
            <h4 className="ticket-event-title">{ticket.eventName}</h4>
            <p className="ticket-order-code">Order Code: {ticket.orderCode}</p>
          </Col>
          <Col xs={3} className="text-end">
            <img src={logo} alt="FindFun Logo" className="ticket-logo-custom img-fluid" />
          </Col>
        </Row>

        {/* Badan Tiket */}
        <Row className="gx-3 gy-3 mt-3 d-flex flex-wrap py-2 px-4 ticket-main-row"> {/* gx-0 untuk menghilangkan gutter default jika perlu kontrol penuh */}
          {/* Kolom Kiri: Detail Stub Tiket */}
          <Col xs={12} md={3} className="d-flex flex-column justify-content-between gap-3 ticket-col-left px-4">
            <div className="ticket-boxed-info">
              <div className="ticket-count-info">{ticket.ticketCountInfo || `${ticket.quantity || 1} Ticket`}</div>
              <div className="ticket-seat-detail">{ticket.seatInfo || ticket.seatNumber || "N/A"}</div>
              <div className="ticket-price-detail">{ticket.priceInfo || new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(ticket.price || 0)}</div>
            </div>
          </Col>

          {/* Kolom Tengah: Info Tanggal, Waktu, Lokasi */}
          <Col xs={12} md={6} className="d-flex flex-column gap-3 ticket-col-middle px-5">
            <div className="ticket-datetime-location-wrapper">
              <div className="ticket-info-box datetime-box mb-3">
                <div className="datetime-left">
                  <p className="event-day">{ticket.eventDay}</p>
                  <p className="event-date">{ticket.eventDate}</p>
                </div>
                <div className="vertical-divider d-none d-md-block" />
                <div className="datetime-right">
                  <p className="event-time">{ticket.eventTime}</p>
                </div>
              </div>
              <div className="ticket-info-box location-box">
                <i className="bi bi-geo-alt-fill location-icon-custom"></i>
                <div className="location-text-content">
                  <p className="ticket-location-name">{ticket.venueName}</p>
                  <p className="ticket-location-address">{ticket.venueDetail}</p>
                </div>
              </div>
            </div>
          </Col>

          {/* Kolom Kanan: QR Code */}
          <Col xs={12} md="auto" className="d-flex justify-content-center align-items-center ticket-col-right px-5"> {/* md="auto" agar lebar menyesuaikan QR */}
            <img
              src={ticket.qrCodeImage}
              alt="QR Code"
              className="ticket-qr img-fluid"
              style={{ maxHeight: "160px", objectFit: "contain" }}
            />
          </Col>
        </Row>
      </Container>

      {/* Tombol Unduh Tiket */}
      <div className="text-center mt-4">
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

export default TicketFilmComponent;