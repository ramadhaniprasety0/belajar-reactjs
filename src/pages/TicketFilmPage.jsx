// src/pages/TicketMusicPage.js
import React from 'react';
import TicketComponent from '../components/TicketFilmComponent';
import { sampleTicketData } from '../data/index';

const TicketFilmPage = () => {
  const ticketData = sampleTicketData;
  return (
    <div className="ticket-page-wrapper">
      <TicketComponent ticket={ticketData} />
    </div>
  );
};

export default TicketFilmPage;