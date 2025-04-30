import {Routes, Route} from 'react-router-dom';

import NavbarComponent from './components/NavbarComponents';
import FooterComponent from './components/FooterComponents';

import HomePage from './pages/HomePage';
import KelasPage from './pages/KelasPage';
import FaqPage from './pages/FaqPage';
import SyaratKetenPage from './pages/SyaratKetenPage';
import TestimonialPage from './pages/TestimonialPage';



function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path='/kelas' Component={KelasPage} />
        <Route path='/testimonial' Component={TestimonialPage} />
        <Route path='/faq' Component={FaqPage} />
        <Route path='/syarat-keten' Component={SyaratKetenPage} />
      </Routes>
      <FooterComponent />
    </div>
  )
}

export default App
