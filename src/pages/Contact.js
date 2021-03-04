import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap'


export default class Contact extends Component {
  render() {
    return (
      <Container className="mt-5 p-5" style={{ width: '500px' }}>
        <h2 className="text-center">Contact us!</h2>
        <h3 className="text-center" >Let's start a conversation</h3>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email adress</Form.Label>
            <Form.Control type="email" placeholder="Enter email.." />
            <Form.Text> We'll never share your email with someone else</Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox" >
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button variant="primary" type="submit">Submit</Button>


        </Form>
      </Container>
    );

  }
}
