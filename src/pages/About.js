import React, { Component } from 'react';
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap';
import pic1 from '../img/pic1.png';


export default class About extends Component {
  render() {
    return (
      <Container className="p-5 mt-5">
        <Tab.Container id='ledt-tabs-example' defaultActiveKey='first'>
          <Row>
            <Col sm={2}>
              <Nav variant='pills' className='flex-column mt-2' >
                <Nav.Item >
                  <Nav.Link eventKey='first'>Design</Nav.Link>
                </Nav.Item>

                <Nav.Item >
                  <Nav.Link eventKey='second'>Team</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey='third'>Programming</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey='fourth'>Frameworks</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>

            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey='first'>
                  <img src={pic1} height='300' width='800' className='d-inline-block align-top' alt='Logo' />
                  <p> <h3>Design</h3> is where the hard work really starts to pay off. We begin with an exploratory – as the name suggests, we explore a range of possibilities with you, getting a feel for how to represent your brand.
                  Design Thinking is a design methodology that provides a solution-based approach to solving problems.
                  It’s extremely useful in tackling complex problems that are ill-defined or unknown, by understanding
                  the human needs involved, by re-framing the problem in human-centric ways, by creating many ideas in
                  brainstorming sessions, and by adopting a hands-on approach in prototyping and testing.
                  Understanding these five stages of Design Thinking will empower anyone to apply the Design
                  Thinking methods in order to solve complex problems that occur around us — in our companies,
                  in our countries, and even on the scale of our planet.
                  </p>
                </Tab.Pane>

                <Tab.Pane eventKey='second'>
                  <img className="d-block w-100" src='https://img.freepik.com/vektoren-kostenlos/teamwork-konzept-fuer-landingpage_23-2148253514.jpg?size=626&ext=jpg' />
                  <p>Teamwork comes from the top, so it follows that a high-performing senior team will result in a high-performing organisation. While many organisations
                  invest in training for individual leaders, development of teams is rare. Undervaluing team process in this way can lead to a lack of awareness and
                  improvement, which can have far-reaching effects.
                  <h3>Collective measures of success</h3>
                      As a team, set goals and have clear measures of success, so everyone is striving towards common objectives.
                  <h3>Establish protocols</h3>
                      Define explicit decision-making procedures for the team to be followed in any situation. This promotes fairness and consistency.
                  </p>
                </Tab.Pane>

                <Tab.Pane eventKey='third'>
                  <img className="d-block w-100" src='https://themmit.com/wp-content/uploads/2018/05/web-development-tool.png' />
                  <p>
                    Why is computer programming important for the future?
                    Programming is crucial when it comes to learning how to innovate, create very eco-friendly solutions for global problems and such.
                    In essence, it helps in speeding up the input and output processes in a machine.
                    Additionally,it helps you develop the ability to automate, collect, manage, analyze the data and information correctly.
                    Programming is, without a doubt, very imporant. Hundreds of universities, thousands of professors, students and
                    practitioners teaching, learning and practicing the discipline of programming are the purest testimony to the fact.
                    And that's why programming is the skill you have to learn.Some of the more reasons why programming is important are:

                  <ul>
                      <li>The interaction with machines and computers</li>
                      <li>Harnessing the power of computing in all human endeavor</li>
                      <li>Automatization of tasks</li>
                      <li>Creating intelligent machines</li>
                    </ul>




                  </p>
                </Tab.Pane>

                <Tab.Pane eventKey='fourth'>
                  <img className="d-block w-100" src='https://rubygarage.s3.amazonaws.com/uploads/article_image/file/812/js-frameworks.jpg' />
                  <ul>
                    <li>A framework is not an absolute necessity, but nonetheless it is very useful.</li>
                    <li>A framework is a pledge of quality, upgradability and maintainability of applications at lower cost.</li>
                    <li>Applications developed using a framework are interoperable with market standards.</li>
                  </ul>


                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>

      </Container>
    );

  }
}
