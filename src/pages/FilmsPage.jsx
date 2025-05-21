
import ErrorComponents from "../components/ErrorComponents";
import { Container, Row, Col} from "react-bootstrap";
import CarouselComponentFilm from "../components/CarouselComponentFilm";
import PopularComponentFilm from "../components/PopularComponentFilm";
import NewsFimlComponen from "../components/NewsFimlComponen";



const FilmsPage = () => {
  return (
      <div className='w-100 min-vh-100 homepage-films'>
         <div>
            <Container >
              <Row className="box-carousel-films  d-flex justify-content-center">
                <h1>Popular Film on FindFun</h1>
                <CarouselComponentFilm className="rounded-4" />
              </Row>
              <Row className="box-populer-films p-3 m-1 mt-4" >
                <h1 className="text-white">Film Hits</h1>
                <PopularComponentFilm />
              </Row>
              <Row>
                <h1 className="text-black pt-4">Whats Going On</h1>
                <NewsFimlComponen />
              </Row>
            </Container>
         </div>
      </div>
  )
}

export default FilmsPage