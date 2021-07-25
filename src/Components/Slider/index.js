import React from 'react';
import {Carousel} from 'react-bootstrap'
import teste from '../../logo.png'
import Banner01 from '../../img/banner01.jpg'
import Banner02 from '../../img/banner02.jpg'
import Banner03 from '../../img/banner03.jpg'
import './style.css'


const Slider=()=> {
    return (
        <Carousel fade={true} pause={false}>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={Banner01}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={Banner02}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={Banner03}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      )
  
  
  }
  
  
  export default Slider;
  