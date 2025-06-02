import React from "react";
import { useParams } from "react-router-dom";
import { ReviewFilms } from "../data"; // Importing the data
import ReviewFilmsComponent from "../components/ReviewFilmsComponent";

const ReviewFilmsPage = () => {
  const { id } = useParams();
  const review = ReviewFilms.find((item) => item.id === parseInt(id));

  if (!review) {
    return (
      <div className="w-100 min-vh-100 d-flex justify-content-center align-items-center homepage-films">
        <h2>Tidak Ada Review</h2>
      </div>
    );
  }

  return (
    <div className="homepage-films">
      <ReviewFilmsComponent review={review} />
    </div>
  );
};

export default ReviewFilmsPage;
