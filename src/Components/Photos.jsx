import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import "../App.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Photo1 from '../images/cafe.JPG';
import Photo2 from '../images/sunset.jpeg';
import Photo3 from '../images/food.JPG';
import Photo4 from '../images/hike.jpeg';
import Photo5 from '../images/mountain.jpeg';

const photos = [
  {
    src: Photo1,
    alt: 'Photo 1',
    text: "I love going to different cafes, this one is my favourite one in my home city - BE Coffee",
  },
  {
    src: Photo2,
    alt: 'Photo 2',
    text: "Watching sunsets or sunrises is one of my favourite things to do to relax.",
  },
  {
    src: Photo3,
    alt: 'Photo 3',
    text: "I enjoy trying new recipes. This is a mexican inspired bowl with 35 grams of plant based protein.",
  },
  {
    src: Photo4,
    alt: 'Photo 4',
    text: "I love spending time outdoors. This is a photo from a hike I did in LA to the Griffiths Observatory.",
  },
  {
    src: Photo5,
    alt: 'Photo 5',
    text: "I grew up in Alberta so I love the mountains. This Abraham Lake in early spring.",
  }
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const CustomButtonGroup = ({ next, previous }) => {
  return (
    <div className="custom-button-group">
      <button className="carousel-btn left-btn-photos" onClick={() => previous()}>
        <i className="fa-solid fa-chevron-left" style = {{marginRight: ''}}></i>
      </button>
      <button className="carousel-btn right-btn-photos" onClick={() => next()}>
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default function Gallery({ title, id }) {
  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: '#my-gallery',
      children: 'a',
      pswpModule: () => import('photoswipe')
    });
    lightbox.init();

    return () => lightbox.destroy();
  }, []);

  return (
    <div className="about">
      <div className="section-content photos" id={id}>
        <Container fluid>
          <Row>
            <Col className="col-12 text-center">
              <h2 className="numbered-heading photos d-flex justify-content-center">
                <span className="section-number">04. </span>Interest Gallery
              </h2>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center align-items-center">
            <div className="carousel-container" style={{ width: '80%' }}>
              <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={true}
                infinite={true}
                autoPlay={false}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                renderButtonGroupOutside={true}
                customButtonGroup={<CustomButtonGroup />}
                arrows={false}
                itemClass="carousel-item-spacing" 
              >
                {photos.map((photo, index, text) => (
                  <div key={index} className='mt-5'>
                      <img
                        className="img-fluid rounded shadow-sm"
                        src={photo.src}
                        alt={photo.alt}
                        style={{ width: '95%', height: '400px', objectFit: 'cover', margin: '0 auto', display: 'block' }}
                      />
                    <div style={{backgroundColor: 'white', width: '95%', margin: '0 auto', display: 'block', borderRadius: '5px'}}>
                    <p style={{ textAlign: 'center', fontSize: '20px', textDecoration: 'none', color: 'inherit', padding: '7px' }}>{photo.text}</p>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
}
