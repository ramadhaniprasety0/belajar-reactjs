import React, { useState, useRef, useEffect } from "react";

const ReviewFilmsComponent = ({ review }) => {
  const [bintangDropdownOpen, setBintangDropdownOpen] = useState(false);
  const [urutkanDropdownOpen, setUrutkanDropdownOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false); // Untuk menangani status icon Bocoran
  const [rating, setRating] = useState(review.rating); // Rating state initialized with default value
  const totalStars = 5;

  // New state for like and dislike count and color change
  const [likeCount, setLikeCount] = useState(100);
  const [dislikeCount, setDislikeCount] = useState(13);
  const [likeClicked, setLikeClicked] = useState(false);
  const [dislikeClicked, setDislikeClicked] = useState(false);

  // Referensi untuk tombol dropdown dan menu dropdown
  const bintangDropdownRef = useRef(null);
  const urutkanDropdownRef = useRef(null);

  const handleRating = (newRating) => {
    setRating(newRating); // Update the rating state when a star is clicked
  };

  // Fungsi untuk toggle dropdown Bintang
  const toggleBintangDropdown = () => {
    setBintangDropdownOpen(!bintangDropdownOpen);
  };

  // Fungsi untuk toggle dropdown Urutkan
  const toggleUrutkanDropdown = () => {
    setUrutkanDropdownOpen(!urutkanDropdownOpen);
  };

  // Menutup dropdown jika klik terjadi di luar tombol atau menu dropdown
  const handleClickOutside = (event) => {
    if (
      bintangDropdownRef.current &&
      !bintangDropdownRef.current.contains(event.target)
    ) {
      setBintangDropdownOpen(false); // Menutup dropdown Bintang
    }
    if (
      urutkanDropdownRef.current &&
      !urutkanDropdownRef.current.contains(event.target)
    ) {
      setUrutkanDropdownOpen(false); // Menutup dropdown Urutkan
    }
  };

  // Menambahkan event listener untuk menangani klik di luar
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    // Bersihkan event listener saat komponen di-unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Handle like click event
  const handleLikeClick = () => {
    if (!likeClicked) {
      setLikeClicked(true); // Select like
      setDislikeClicked(false); // Deselect dislike
      setLikeCount(likeCount + 1); // Increase like count
      setDislikeCount(dislikeCount - (dislikeClicked ? 1 : 0)); // Decrease dislike count if it was selected
    } else {
      setLikeClicked(false); // Deselect like
      setLikeCount(likeCount - 1); // Decrease like count
    }
  };

  // Handle dislike click event
  const handleDislikeClick = () => {
    if (!dislikeClicked) {
      setDislikeClicked(true); // Select dislike
      setLikeClicked(false); // Deselect like
      setDislikeCount(dislikeCount + 1); // Increase dislike count
      setLikeCount(likeCount - (likeClicked ? 1 : 0)); // Decrease like count if it was selected
    } else {
      setDislikeClicked(false); // Deselect dislike
      setDislikeCount(dislikeCount - 1); // Decrease dislike count
    }
  };

  return (
    <div className="reviewfilms">
      <div className="poster-section-review">
        <img
          className="rounded-5 film-poster"
          src={review.heroimage}
          alt={review.title}
        />
      </div>
      <div className="title-review">
        <p>{review.title}</p>
        <h2>{review.text}</h2>
      </div>
      <div className="d-flex mb-4">
        <h3 className="h3-review-film">1.022 m Ulasan</h3>
        <div className="buttons d-flex ">
          {/* Dropdown Bintang */}
          <div className="dropdown btn-review-film" ref={bintangDropdownRef}>
            <button
              className="btn-review"
              type="button"
              onClick={toggleBintangDropdown}
            >
              Bintang
            </button>
            {bintangDropdownOpen && (
              <ul className="dropdown-menu-review-film text-center">
                <li>Unggulan</li>
                <li>Tanggal Ulasan</li>
                <li>Disukai Terbanyak</li>
              </ul>
            )}
          </div>

          {/* Dropdown Urutkan */}
          <div className="dropdown btn-review-film" ref={urutkanDropdownRef}>
            <button
              className="btn-review"
              type="button"
              onClick={toggleUrutkanDropdown}
            >
              Urutkan
            </button>
            {urutkanDropdownOpen && (
              <ul className="dropdown-menu-review-film text-center">
                <li>Bintang 1</li>
                <li>Bintang 2</li>
                <li>Bintang 3</li>
              </ul>
            )}
          </div>

          {/* Icon Bocoran */}
          <div
            className="icon-bocoran"
            onClick={() => setIsChecked(!isChecked)}
          >
            <i
              className={`fa${isChecked ? "s" : "r"} fa-check-circle`} // Mengubah class icon berdasarkan status
              style={{
                fontSize: "15px",
                color: isChecked ? "black" : "#29282F", // Mengubah warna icon saat dipilih
                cursor: "pointer",
              }}
            ></i>
            <span
              style={{
                color: isChecked ? "black" : "#29282F", // Warna teks berubah sesuai status
                fontWeight: "bold",
                marginLeft: "5px",
              }}
            >
              Bocoran
            </span>
          </div>

          {/* Tombol + Ulasan */}
          <div className="btn-ulasan">
            <button className="btn-plus-ulasan" type="button">
              + Ulasan
            </button>
          </div>
        </div>
      </div>
      <div className="reviewer-film mb-5">
        {/* Star Rating System */}
        <div className="stars p-3">
          <span>
            {rating}/{totalStars}
          </span>
          {[...Array(totalStars)].map((_, index) => (
            <span
              key={index + 1}
              className={`star ${index + 1 <= rating ? "filled" : ""}`}
              onClick={() => handleRating(index + 1)} // Update rating on click
              style={{
                cursor: "pointer",
                fontSize: "24px", // Size of the stars
                color: index + 1 <= rating ? "black" : "gray", // Gold for selected, gray for unselected
              }}
            >
              ★
            </span>
          ))}
        </div>
        <div className="reviewer-film-isi p-3">
          <h1 className="">{review.description.plot}</h1>
          <div className="alur-film mt-3">
            <h5>Alur</h5>
            <p>{review.description.story}</p>
          </div>
          <div className="sinematografi-film">
            <h5>Sinematografi</h5>
            <p>{review.description.cinematography}</p>
          </div>
          <div className="pemeran-film">
            <h5>Pemeran</h5>
            <p>{review.description.performance}</p>
          </div>
          <div className="lainnya-film">
            <h5>Lainnya</h5>
            <p>{review.description.other}</p>
          </div>
        </div>
        <div className="reviewer-film-users p-3 d-flex ">
          <p>{review.reviews.username}</p>
          <p>{review.reviews.date}</p>
        </div>
        <div className="like-dislike">
          {/* Like and Dislike */}
          <div className="like-dislike-buttons d-flex ">
            <button
              onClick={handleDislikeClick}
              style={{
                color: dislikeClicked ? "#2E388A" : "#2E388A",
                fontSize: "15px",
                cursor: "pointer",
                border: "none",
                background: "transparent",
              }}
            >
              <i className={`fa${dislikeClicked ? "s" : "r"} fa-thumbs-down`} />
              {dislikeCount}
            </button>
            <button
              onClick={handleLikeClick}
              style={{
                color: likeClicked ? "#2E388A" : "#2E388A",
                fontSize: "15px",
                cursor: "pointer",
                border: "none",
                background: "transparent",
              }}
            >
              <i className={`fa${likeClicked ? "s" : "r"} fa-thumbs-up`} />
              {likeCount}
            </button>
            <p>| . Bermanfaat</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewFilmsComponent;
