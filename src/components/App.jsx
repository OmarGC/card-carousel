import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../utils/styles/font-awesome/css/all.min.css"

import Card from './Card'

export const App = () => {
  
    const [hideNextArrow, setHideNextArrow] = useState(false);
    const [hidePrevArrow, setHidePrevArrow] = useState(true);
    const imageCargando="https://media1.tenor.com/images/d0d34942ccc4c3fc6fbd243ea6a70d6a/tenor.gif?itemid=12199060";
   

    const hideArrow = arrow => {
      if( arrow === 5 ) {
        setHideNextArrow(true);
        setHidePrevArrow(false);
      } else if( arrow !== 5 && arrow !== 0 ){
        setHideNextArrow(false);
        setHidePrevArrow(false);
      } else if( arrow === 0 ) {
        setHideNextArrow(false);
        setHidePrevArrow(true);
      }
    }

    const settings = {
      dots: true,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
      initialSlide: 0,
      lazyLoad: true,
      nextArrow: <SampleNextArrow display={ hideNextArrow } />,
      prevArrow: <SamplePrevArrow  display={ hidePrevArrow } />,
      afterChange: currentSlide => hideArrow(currentSlide)
    };
    return (
      <div style={{ width: '30%', margin: '0 auto' }}>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div className="item" > <Card pokemon= "" /> </div>
          <div className="item" > <Card pokemon= "latias" /> </div>
          <div className="item" > <Card pokemon= "latios" /> </div>
          <div className="item" > <Card pokemon= "gengar" /> </div>
          <div className="item" > <Card pokemon= "rayquaza" />  </div>
          <div className="item" > <Card pokemon= "machop" />  </div>
        </Slider>
      </div>
    );

}

const SampleNextArrow = ({onClick, display}) => {
  return(
     <i 
       onClick={ onClick } 
       className={ display ? 'hideArrow' : 'fas fa-angle-right nextArrow' } ></i>
  );
}

const SamplePrevArrow = ({onClick, display}) => {
  return(
    <i
      onClick={onClick}
      className={ display ? 'hideArrow' : 'fas fa-angle-left prevArrow' }
    ></i>
  );
}

export default App;