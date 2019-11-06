/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {Row, Col, Container, Button} from 'reactstrap'
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom'
import { Component } from 'react'
import axios from 'axios'


import Content from './../components/Content'
import JobItems from './../components/JobItems'
import Footer from './../components/Footer'
import bgimage from './../images/jobpic.png'

export default class Home extends Component {

  render() {
    return (
      <div>   
      <BrowserRouter>
     
     {/* Header */}
      {/* <Content/> */}
      
      <Container>
      <Row>
      <img src={bgimage} alt=""/>
      </Row>
    </Container>

      <Footer/> 

      </BrowserRouter>
      </div>
    )
  }
}
