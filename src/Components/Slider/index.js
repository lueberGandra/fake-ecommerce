import React, { useState } from 'react';
import {Carousel} from 'react-bootstrap'
import './style.css'


const Slider=()=> {
    return (
        <Carousel fade={true} pause={false}>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={"https://static.wixstatic.com/media/a4f3e7_019f29debfbd4d128d45b610099f64fe~mv2.png/v1/fill/w_1720,h_580,al_c,q_90,usm_0.66_1.00_0.01/Mapa-B2C-Cover05.webp"}
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
              src={"https://static.wixstatic.com/media/a4f3e7_019f29debfbd4d128d45b610099f64fe~mv2.png/v1/fill/w_1720,h_580,al_c,q_90,usm_0.66_1.00_0.01/Mapa-B2C-Cover05.webp"}
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
              src={"https://static.wixstatic.com/media/a4f3e7_019f29debfbd4d128d45b610099f64fe~mv2.png/v1/fill/w_1720,h_580,al_c,q_90,usm_0.66_1.00_0.01/Mapa-B2C-Cover05.webp"}
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
  