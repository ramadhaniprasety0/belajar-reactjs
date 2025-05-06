import ErrorComponents from '../components/ErrorComponents'
import { Container, Row, Col} from "react-bootstrap";
import CarouselComponentFilm from "../components/CarouselComponentFilm";
import PopularComponentMusic from "../components/PopularComponentMusic";
import KonserMusicComponent from "../components/KonserMusicComponent";
import NewsMusicComponent from "../components/NewsMusicComponent";



const MusicsPage = () => {
  return (
      <div className='w-100 min-vh-100 homepage-musics'>
         <div>
            <Container >
              <Row className="box-carousel-musics  d-flex justify-content-center">
                <h1>Populer Musik di FindFun</h1>
                <CarouselComponentFilm className="rounded-4" />
              </Row>
              <Row className="box-konser-musics p-3 m-1 mt-4" >
                <h1 className="text-black">Konser Mendatang</h1>
                <KonserMusicComponent />
              </Row>
              <Row className="box-populer-musics p-3 m-1 mt-4" >
                <h1 className="text-black text-center">Musik Populer</h1>
                <PopularComponentMusic />
              </Row>
              <Row className="box-hots-news p-3">
                <h1 className="text-black">Berita Terbaru</h1>
                <NewsMusicComponent />
              </Row>
            </Container>
         </div>
      </div>
  )
}

export default MusicsPage