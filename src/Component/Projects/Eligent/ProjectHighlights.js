import React from 'react';
import { useState } from 'react';
import './css/projecthighlights.css';
import College from "./ElegantImages/medical-college.jpg";
import shivan from "./ElegantImages/isha.jpg";
import Hills from "./ElegantImages/nandhi-hills.png";
import flight from "./ElegantImages/flight1.jpg";
import Rock  from "./ElegantImages/rock.jpg";

import trecking from "./ElegantImages/aval-beta.jpg";

function ProjectHighlights() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardHover = (cardIndex) => {
    setHoveredCard(cardIndex);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  const cards = [
    {
      title: 'Medical College',
      image: College,
    },

    {
      title: 'Isha Foundation',
      image: shivan,
    },
    {
      title: 'Nandhi Hills',
      image: Hills,
    },
    {
      title: 'Kempegowda International Airport',
      image: flight,
    },
    {
      title: 'Varlakonda Rock Climbing Point',
      image: Rock,
    },
    {
      title: 'Avala Beta',
      image:trecking ,
    },
  ];

  return (
    <>
    <div className='bg-light'>
    <div className="container py-4">
      {/* <h2 className="text-center  font11 color ">Tourist Places</h2> */}
      <h2 className="text-center pb-4 font1" style={{ color: "#255946" }}>
        Nearby Places
      </h2>
      <div className="row">
        {cards.map((card, index) => (
          <div
            key={index}
            className={` col-12 col-md-6 col-lg-4 mb-4 card-container ${
              hoveredCard === index ? 'hovered' : ''
            }`}
            onMouseEnter={() => handleCardHover(index)}
            onMouseLeave={handleCardLeave}
          >
            <div className="card">
              <img
                src={card.image}
                className="card-img-top"
                alt={card.title}
              />
              <div className="card-body project-body color">
                <h5 className="card-title ">{card.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </>
  );
}

export default ProjectHighlights;