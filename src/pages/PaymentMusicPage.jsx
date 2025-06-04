// src/pages/PaymentConfirmationPage.js
import React from 'react';
import PaymentConfirmationComponent from '../components/PaymentMusicComponent';
import { paymentMusic } from '../data/index';
const PaymentMusicPage = () => {
  return (
    <>
      <div className="payment-page"> 
        <PaymentConfirmationComponent data={paymentMusic} />
      </div>
    </>
  );
};

export default PaymentMusicPage;