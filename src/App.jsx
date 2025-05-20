import { Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponents";
import FooterComponent from "./components/FooterComponents";

import HomePage from "./pages/HomePage";
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
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Films" element={<FilmsPage />} />
        <Route path="/Musics" element={<MusicsPage />} />
        <Route path="/Musics/:id" element={<DetailMusicsPage />} />
        <Route path="/Films/:id" element={<DetailFilmsPage />} />
        <Route path="/TicketFilms" element={<TicketFilmsPage />} />
        <Route path="/Populer" element={<PopulerMusicsPage />} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
