import React, { Component } from 'react';
import CarouselBox2 from '../components/CarouselBox2';
import { Container, CardDeck, Card, Button } from 'react-bootstrap';
import Card1 from '../img/card1.jpg';
import Card2 from '../img/card2.jpg';
import Card3 from '../img/card3.jpg';


export default class Blog extends Component {
  render() {
    return (<>
      <CarouselBox2 />
      <Container>
        <h2 className="text-center m-4">Our Team</h2>

        <CardDeck className="m-4">
          <Card>
            <Card.Img
              variant="top" src={Card1} />

            <Card.Body>
              <Card.Title>Designers</Card.Title>
              <Card.Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </Card.Text>
              <Button variant="primary">About Team</Button>
            </Card.Body>
          </Card>

          <Card>

            <Card.Body>
              <Card.Title>Developers</Card.Title>
              <Card.Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </Card.Text>
              <Button variant="primary">About Team</Button>
            </Card.Body>
            <Card.Img
              variant="top" src={Card2} />

          </Card>

          <Card>
            <Card.Img
              variant="top" src={Card3} />

            <Card.Body>
              <Card.Title>Marketing managers</Card.Title>
              <Card.Text>Alice Media leverages our digital experience, analytics expertise, and creative talent to build marketing strategies that deliver exceptional results. In a landscape of disruption, our team blends the art and science of strategy, seizing opportunities through actionable insights and powerful storytelling. </Card.Text>
              <Button variant="primary">About Team</Button>
            </Card.Body>
          </Card>

        </CardDeck>
      </Container>

    </>

    );

  }
}
