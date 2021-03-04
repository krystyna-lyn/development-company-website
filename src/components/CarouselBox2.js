import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import MDBMask from 'react-bootstrap/Carousel';
import Photo from '../assets/bg3.jpg';
import Photo2 from '../assets/bg4.jpg';
import s from '../css/carousel2.module.css';




export default class CarouselBox2 extends Component {

  render() {
    return (<div>

      <Carousel className="m-5 p-5">

        <Carousel.Item>

          <MDBMask className="flex-center" overlay="green-strong" >
            <img className='d-block w-100'
              src={Photo}
              alt='Bg-teamwork'
            />
          </MDBMask>


          <Carousel.Caption>
            <h6 className={s.blog}>Welcome to our blog!</h6>
          </Carousel.Caption>

        </Carousel.Item>

        <Carousel.Item>
          <img className='d-block w-100'
            src={Photo2}
            alt='team' />

        </Carousel.Item>
      </Carousel>

    </div>
    );

  }
}
