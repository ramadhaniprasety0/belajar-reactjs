import React from "react";
import { useParams } from "react-router-dom";
import { ReviewMusics } from "../data";
import ReviewMusicsComponent from "../components/ReviewMusicsComponent";

const ReviewMusicsPage = () => {
const { id } = useParams();
  const review = ReviewMusics.find((item) => item.id === parseInt(id));

  if (!review) {
    return (
      <div className="w-100 min-vh-100 d-flex justify-content-center align-items-center homepage-films">
        <h2>Tidak Ada Review</h2>
      </div>
    );
  }

  return (
    <div className="homepage-films">
      <ReviewMusicsComponent review={review} />
    </div>
  );
}

export default ReviewMusicsPage