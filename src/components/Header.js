import React, { Component } from 'react';
import { Navbar, Form, FormControl, Button, Nav, NavLink, Container } from 'react-bootstrap';
import logo from '../img/logo.png';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Blog from '../pages/Blog';
import Technology from '../pages/Technology';
import s from '../css/header.module.css';



export default class Header extends Component {
  render() {
    return (

      <>
        <Router>
          <Navbar fixed="top" callapseOnSelect expand='md' className={s.navColor} variant="dark">
            <Container>

              <Navbar.Brand href='/'>
                <img src={logo}
                  height='30' width='30' className='d-inline-block align-top' alt='Logo' />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls='responsive-navbar-nav' />
              <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav className='mr-auto'>

                  <NavLink as={Link} to="/">Home</NavLink>

                  <NavLink as={Link} to="/about">About us</NavLink>

                  <NavLink as={Link} to="/technology">Technology</NavLink>

                  <NavLink as={Link} to="/contact">Contact</NavLink>

                  <NavLink as={Link} to="/blog">Blog</NavLink>



                </Nav>
                <Form inline>
                  <FormControl
                    type='text'
                    placeholder='Search'
                    className='mr-sm-2'
                  />
                  <Button variant='outline-light'>Search</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>


          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/technology' component={Technology} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/blog' component={Blog} />

          </Switch>
        </Router>
      </>
    );
  }
}
