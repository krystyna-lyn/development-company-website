import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import Photo from '../assets/bg.jpg';
import Photo2 from '../assets/bg1.jpg';
import s from '../css/carousel.module.css';




export default class CarouselBox extends Component {

  render() {
    return (<div>
      <Carousel className="mt-5 pt-5">

        <Carousel.Item>
          <img className='d-block w-100'
            src={Photo}
            alt='Bg-Mac'
          />

          <Carousel.Caption>


            <h1>innovative websites</h1>

            <h5>We use technology to help brands grow in an age of digital transformation.</h5>

          </Carousel.Caption>

        </Carousel.Item>

        <Carousel.Item>
          <img className='d-block w-100'
            src={Photo2}
            alt='Bg-Buildings' />



        </Carousel.Item>
      </Carousel>

    </div>
    );

  }
}
