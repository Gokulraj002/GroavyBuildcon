import React, { useState } from 'react';
import { useSprings, animated, to as interpolate } from '@react-spring/web';
import { useDrag } from 'react-use-gesture';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Dining from './ElegantImages/aval-beta.jpg';
import Gym from './ElegantImages/elegant-main.jpg';
import Outdoor from './ElegantImages/vegetables.jpg';
import PlayArea from './ElegantImages/replace.png';
import Swimming from './ElegantImages/flight.jpg';
import Gym2 from './ElegantImages/flight1.jpg';

const images = [Dining, Gym, Outdoor, PlayArea, Swimming, Gym2];

const to = (i) => ({
  x: 0,
  y: 0, // Start with y position at 0
  scale: 1,
  rot: 0, // Start with no rotation
  delay: i * 100,
});

const from = (_i) => ({ x: 0, rot: 0, scale: 1, y: 0 }); // Start with no transformation

const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    className: 'custom-slider', // Apply custom class for styling
  };

  const [gone] = useState(() => new Set());
  const [props, api] = useSprings(images.length, (i) => ({
    ...to(i),
    from: from(i),
  }));

  const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2;
    const dir = xDir < 0 ? -1 : 1;
    if (!down && trigger) gone.add(index);
    api.start((i) => {
      if (index !== i) return;
      const isGone = gone.has(index);
      const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0;
      const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0);
      const scale = down ? 1.1 : 1;
      return {
        x,
        rot,
        scale,
        delay: undefined,
        config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
      };
    });
    if (!down && gone.size === images.length)
      setTimeout(() => {
        gone.clear();
        api.start((i) => to(i));
      }, 600);
  });

  return (
    <div className="slider-container my-5">
      <Slider {...settings}>
        {props.map(({ x, y, rot, scale }, i) => (
          <div key={i}>
            <animated.div
              {...bind(i)}
              className="slider-card"
              style={{
                transform: interpolate([rot, scale], trans),
                backgroundImage: `url(${images[i]})`,
                cursor: 'grab', // Add grab cursor for dragging
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
