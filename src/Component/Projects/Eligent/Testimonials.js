import React from 'react';
import Home from "./ElegantImages/user-men.png";
import Home1 from "./ElegantImages/user-women.png";
// import Home3 from "./ElegantImages/three.png";
import { Container, Row, Col, Carousel } from 'react-bootstrap';

const Testimonials = () => {
  const testimonialData = {
    bg: 'bg py-3 my-4',
    containerClass: "py-4 mx-auto ",
    carousel: {
      controls: true,
      indicators: false,
      items: [
        {
          imageSrc: Home,
          imageAlt: "avatar",
          name: "Raghavendra",
          quote: "Incredibly pleased with the seamless home buying process facilitated by Groavy. Their expertise and personalized approach made finding and securing our dream home an absolute delight!.",
          rating: 5
        },
        {
          imageSrc: Home1,
          imageAlt: "avatar",
          name: "Maha Lakshmi",
          quote: "Smooth and stress-free home buying experience with Groavy. Their knowledgeable team and efficient process made finding our perfect home a breeze. Grateful for their expertise and excellent service!.",
          rating: 5
        },
        // {
        //   imageSrc: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp",
        //   imageAlt: "avatar",
        //   name: "Anna Deynah",
        //   quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit doloremque.",
        //   rating: 4
        // }
      ]
    }
  };
  
  return (
    <>
    <div className={testimonialData.bg}>
    <h2 className='font11 color text-center pt-2'>Testimonials</h2>

      <Container className={testimonialData.containerClass}>
        <Carousel controls={testimonialData.carousel.controls} indicators={testimonialData.carousel.indicators}>
          {testimonialData.carousel.items.map((item, index) => (
            <Carousel.Item className="text-center" key={index}>
              <img
                src={item.imageSrc}
                alt={item.imageAlt}
                className="rounded-circle shadow-1-strong mb-4"
                style={{ width: "150px" }}
              />
              <Row className="d-flex justify-content-center">
                <Col lg={8}>
                  <h5 className="mb-3 font2">{item.name}</h5>
                  <p>{item.profession}</p>
                  <p className="text-white test-font para-color1">
                    <i className="fas fa-quote-left pe-2" />
                    {item.quote}
                    <i className="fas fa-quote-right pe-2" />
                  </p>
                </Col>
              </Row>
              <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                {Array.from({ length: 5 }, (_, starIndex) => (
                  <li key={starIndex}>
                    <i className={starIndex < item.rating ? "fas fa-star" : "far fa-star"} />
                  </li>
                ))}
              </ul>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </div>
    </>
  );
};

export default Testimonials;
