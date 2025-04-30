import { Col, Container, Row } from 'react-bootstrap';

function FooterComponents() {
  return (
    <footer>
      <Row className='footer p-5'>
        <Col lg={3} >
          <div className='d-flex gap-2 align-items-center'>
            <img src="/findfun.svg" alt="LogoFooter" width="41" height="40" />
            <h1 className='text-white fs-2 fw-bold'>Find Fun</h1>
          </div>
          <p className='text-white mt-4 fw-regular text-justify'>FindFun is an innovative online entertainment platform designed to offer users a personalized and interactive experience. It provides a diverse range of entertainment content, including movies, entertaiment news,  and music videos, games, and user-generated creative content. </p>
        </Col>
        <Col lg={3} className='d-flex flex-column align-items-center'>
          <div>
          <h1 className='text-white fs-5 fw-bold'>Product</h1>
          </div>
          <ul className='list-unstyled mt-5'>
            <li className='text-white fw-regular'>Music</li>
            <li className='text-white fw-regular'>Film</li>
            <li className='text-white fw-regular'>News</li>
          </ul>
        </Col>
        <Col lg={3}  className='d-flex flex-column align-items-center'>
          <h1 className='text-white fs-5 fw-bold'>Support</h1>
          <ul className='list-unstyled mt-5'>
            <li className='text-white fw-regular'>FAQ</li>
            <li className='text-white fw-regular'>Contact Us</li>
            <li className='text-white fw-regular'>Privacy Policy</li>
            <li className='text-white fw-regular'>Terms & Conditions</li>
          </ul>
        </Col>
        <Col lg={3}  className='icons-sosmed d-flex flex-column align-items-start'>
          <h1 className='text-white fs-5 fw-bold'>Sosial Media</h1>
          <p className='text-white fw-regular mt-5'>For recent updates and news follow our social media feeds</p>
          <ul className='d-flex gap-3 list-unstyled'>
            <li><a href=""><i class="fa-brands fa-youtube fs-4"></i></a></li>
            <li><a href=""><i class="fa-brands fa-instagram fs-4"></i></a></li>
            <li><a href=""><i class="fa-brands fa-facebook fs-4"></i></a></li>
            <li><a href=""><i class="fa-brands fa-twitter fs-4"></i></a></li>
            <li><a href=""><i class="fa-solid fa-envelope fs-4"></i></a></li>
          </ul>
        </Col>
      </Row>
      <Row className='copyright'>
        <Col lg={12} className='d-flex align-content-center justify-content-center'>
          <p>Copyright © FindFun 2025. All rights reserved.</p>
        </Col>
      </Row>
    </footer>
    
  )
}

export default FooterComponents