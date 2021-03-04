import React, { Component } from 'react';
import CarouselBox from '../components/CarouselBox';
import { Container, CardDeck, Card, Button } from 'react-bootstrap';
import Photo1 from '../assets/home.jpg';
import s from '../css/home.module.css';

export default class Home extends Component {

  render() {

    return (<div>

      <CarouselBox />

      <Card>

        <Card.Body>
          <Card.Title className={s.title}>Welcome to Alice Web development company</Card.Title>
          <Card.Text className={s.text}>Builds and promotes, offering end-to-end solutions, agility in execution, and depth of specialization.
          Nisi incididunt ad reprehenderit est deserunt. Velit adipisicing eiusmod amet Lorem. Dolore amet reprehenderit tempor sit laboris deserunt adipisicing ut ipsum consequat veniam ut. Pariatur ut duis officia amet ad reprehenderit ex. Sint ipsum incididunt veniam esse exercitation irure occaecat veniam nulla nostrud tempor eiusmod non anim.
        </Card.Text>
          <Button className={s.navColor} variant="dark">About Team</Button>
        </Card.Body>

        <Card.Img
          variant="top" src={Photo1} />


      </Card>

    </div>
    );

  }
}
