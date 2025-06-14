import { Card, Button } from "react-bootstrap";
import { bioskopFilmsData } from "../data/index";
import { Link } from "react-router-dom";

const TicketFilms = () => {
  return (
    <div className="ticketfilms">
      {bioskopFilmsData.map((bioskop) => {
        return (
          <Card
            key={bioskop.id}
            style={{ width: "385px", height: "770px" }}
            className="card-ticketfilms"
          >
            <Card.Img
              variant="top"
              src={bioskop.image}
              className="img-ticketfilms"
            />
            <Card.Body>
              <div className="btn-ticketfilms mb-4 mt-2">{bioskop.genre}</div>
              <Card.Title>{bioskop.title}</Card.Title>
              <Card.Text className="mt-3">{bioskop.description}</Card.Text>
              <Link
                to={`/detailtiketfilms/${bioskop.id}`}
                className="link-ticketfilms"
              >
                Lihat <span className="bioskop-arrow">›</span>
              </Link>
            </Card.Body>
            <div className="date-ticketfilms">
              <p className="p-date">
                <b>{bioskop.date}</b>
              </p>
              <p className="p-month-year">
                {bioskop.month} {bioskop.year}
              </p>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default TicketFilms;
