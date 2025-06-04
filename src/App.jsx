import { Routes, Route } from "react-router-dom";

import MainLayout from "./MainLayout";
import MainLayoutAfter from "./MainLayoutAfter";
import HomePage from "./pages/HomePage";
import HomePageAfter from "./pages/HomePageAfter";
import LoginPage from "./pages/LoginPage";
import RegisPage from "./pages/RegisterPage";
import FilmsPage from "./pages/FilmsPage";
import FormBayarMusicPage from "./pages/FormBayarPage";
import FormBayarFilmPage from "./pages/FormBayarFilmPage";
import FilmsPageAfter from "./pages/FilmsPageAfter";
import FaqPage from "./pages/FaqPage";
import SyaratKetenPage from "./pages/SyaratKetenPage";
import PaymentMusicPage from "./pages/PaymentMusicPage";
import PaymentFilmPage from "./pages/PaymentFilmPage";
import MusicsPage from "./pages/MusicsPage";
import ProfilePage from "./pages/ProfilePage";
import MusicsPageAfter from "./pages/MusicsPageAfter";
import DetailMusicsPage from "./pages/DetailMusicsPage";
import PopulerMusicsPage from "./pages/PopulerMusicsPage";
import KonserMusicsPage from "./pages/KonserMusicsPage";
import DetailFilmsPage from "./pages/DetailFilmsPage";
import DetailKonserPage from "./pages/DetailKonserPage";
import TicketFilmsPage from "./pages/TicketFilmsPage";
import TicketMusicPage from "./pages/TicketMusicPage";
import TicketFilmPage from "./pages/TicketFilmPage";
import ReviewFilmsPage from "./pages/ReviewFilmsPage";
import DetailTiketFilmsPage from "./pages/DetailTiketFilmsPage";
import ReviewMusicsPage from "./pages/ReviewMusicsPage";

function App() {
  return (
    <Routes>
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/Register" element={<RegisPage />} />

      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/films" element={<FilmsPage />} />
        <Route path="/films/:id" element={<DetailFilmsPage />} />
        <Route path="/ticketfilms" element={<TicketFilmsPage />} />
        <Route path="/musics" element={<MusicsPage />} />
        <Route path="/musics/:id" element={<DetailMusicsPage />} />
        <Route path="/populer" element={<PopulerMusicsPage />} />
        <Route path="/konser" element={<KonserMusicsPage />} />
        <Route path="/konser/:id" element={<DetailKonserPage />} />
        <Route path="/bayar-konser/:id" element={<FormBayarMusicPage />} />
        <Route path="/bayar-film/:id" element={<FormBayarFilmPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/konfirm-bayar-konser/:id" element={<PaymentMusicPage />} />
        <Route path="/konfirm-bayar-film/:id" element={<PaymentFilmPage />} />
        <Route path="/tiket-musik" element={<TicketMusicPage />} />
        <Route path="/tiket-film" element={<TicketFilmPage />} />
        <Route path="/syaratketen" element={<SyaratKetenPage />} />
        <Route path="/reviewfilms/:id" element={<ReviewFilmsPage/>} />
        <Route path="/detailtiketfilms/:id" element={<DetailTiketFilmsPage/>} />  
        <Route path="/reviewmusics/:id" element={<ReviewMusicsPage/>} />  
      </Route>

      <Route path="/users" element={<MainLayoutAfter />}>
        <Route index element={<HomePageAfter />} />
        <Route path="films" element={<FilmsPageAfter />} />
        <Route path="musics" element={<MusicsPageAfter />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}

export default App;
