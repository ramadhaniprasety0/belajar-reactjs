// src/pages/TicketMusicPage.js
import React from 'react';
import TicketMusikComponent from '../components/TicketMusicComponent'; // Nama komponen dari interaksi sebelumnya
import { dummyTicketData } from '../data/index'; // <-- PERUBAHAN DI SINI

const TicketMusicPage = () => {
  const ticketData = dummyTicketData; // Menggunakan data yang diimpor
  return (
    <div className="ticket-page-wrapper">
      <TicketMusikComponent ticket={ticketData} />
    </div>
  );
};

export default TicketMusicPage;