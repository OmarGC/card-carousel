import React, { Fragment, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../utils/styles/font-awesome/css/all.min.css"

import Card from './Card'

export const App = () => {
  
    const [hideNextArrow, setHideNextArrow] = useState(false);
    const [hidePrevArrow, setHidePrevArrow] = useState(true);
   

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
      lazyLoad: true,
      // fade: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      speed: 900,
      initialSlide: 0,
      nextArrow: <SampleNextArrow display={ hideNextArrow } />,
      prevArrow: <SamplePrevArrow  display={ hidePrevArrow } />,
      afterChange: currentSlide => hideArrow(currentSlide),
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0
          }
 
        }
      ]
    };

    const renderComponent = () => {
      return(
        <Fragment>
          <div style={{width: '70%', margin: '0 auto'}} >
          <h2> Single Item</h2>
          <Slider {...settings}>
            <Card pokemon= "totodile" />         
            <Card pokemon= "latias" />   
            <Card pokemon= "latios" />   
            <Card pokemon= "gengar" />   
            <Card pokemon= "rayquaza" /> 
            <Card pokemon= "machop" />   
          </Slider>
        </div>
        </Fragment>
      );
    }

    return( renderComponent() );

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