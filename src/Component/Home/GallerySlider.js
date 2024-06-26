import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./GallerySlider.css";
import FullView from '../../Component/Projects/Eligent/ElegantImages/full-change.png';
import Entrance from '../../Component/Projects/Eligent/ElegantImages/entrance.png';
import Park from '../../Component/Projects/Eligent/ElegantImages/club.png';
import Rock from '../../Component/Projects/Eligent/ElegantImages/park-change.png';
import swimming from '../../Component/Projects/Eligent/ElegantImages/swimm.png';
import Gate from '../../Component/Projects/Eligent/ElegantImages/swimming.png';
import Swim from '../../Component/Projects/Eligent/ElegantImages/rock-change.png';
import ori from "../../images/ori1.png"
import ori1 from "../../images/ori.png"

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 892 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 892, min: 768 },
    items: 2 ,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 164 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const sliderImageUrl = [
  { url: ori1 },
  { url: ori },
  { url: FullView },
  { url: Entrance },
  { url: Park },
  { url: Rock },
  { url: swimming },
  { url: Gate },
  

  { url: Swim },
];

const Slider = () => {
  return (
    <div >
      <h2 className="font1 text-center mt-2 mb-4" style={{color:'#3A6958'}}>Project Gallery</h2>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => (
          <div className="slider" key={index}>
            <img className="w-100 rounded-0" src={imageUrl.url} alt="Gallery Item" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default Slider