import React from "react";
import { useParams } from "react-router-dom";
import { DetailTiketFilms } from "../data";
import DetailTiketFilmsComponent from "../components/DetailTiketFilmsComponent";

const DetailTiketFilmsPage = () => {
    const { id } = useParams();
    const detailTiketFilms = DetailTiketFilms.find((item) => item.id === parseInt(id));

    if (!detailTiketFilms) {
        return (
            <div className="w-100 min-vh-100 d-flex justify-content-center align-items-center homepage-films">
                <h2>Tiket Film tidak ditemukan</h2>
            </div>
        );
    }
    return (
       <div className="homepage-films">
           <DetailTiketFilmsComponent detailTiketFilms={detailTiketFilms} />
       </div>
    );
};

export default DetailTiketFilmsPage;