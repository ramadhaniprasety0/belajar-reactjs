import React from 'react';
import PaymentFilmComponent from '../components/PaymentFilmComponent';
import { paymentFilm } from '../data/index';
const PaymentFilmPage = () => {
  return (
    <>
      <div className="payment-page"> 
        <PaymentFilmComponent data={paymentFilm} />
      </div>
    </>
  );
};

export default PaymentFilmPage;