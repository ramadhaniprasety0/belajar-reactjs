import { Routes, Route } from "react-router-dom";

import MainLayout from "./MainLayout";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisPage from "./pages/RegisterPage";
import FilmsPage from "./pages/FilmsPage";
import FaqPage from "./pages/FaqPage";
import SyaratKetenPage from "./pages/SyaratKetenPage";
import MusicsPage from "./pages/MusicsPage";
import DetailMusicsPage from "./pages/DetailMusicsPage";
import PopulerMusicsPage from "./pages/PopulerMusicsPage";
import DetailFilmsPage from "./pages/DetailFilmsPage";
import TicketFilmsPage from "./pages/TicketFilmsPage";

function App() {
  return (
    <Routes>
      {/* Halaman Login tanpa navbar/footer */}
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/Register" element={<RegisPage />} />

      {/* Semua halaman lain dengan layout lengkap */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/films" element={<FilmsPage />} />
        <Route path="/musics" element={<MusicsPage />} />
        <Route path="/musics/:id" element={<DetailMusicsPage />} />
        <Route path="/films/:id" element={<DetailFilmsPage />} />
        <Route path="/ticketfilms" element={<TicketFilmsPage />} />
        <Route path="/populer" element={<PopulerMusicsPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/syaratketen" element={<SyaratKetenPage />} />
      </Route>
    </Routes>
  );
}

export default App;
