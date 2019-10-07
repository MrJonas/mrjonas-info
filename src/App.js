import React from 'react';
import './App.css';
import { MainInfo, Skills, Projects, Codewars } from './components';
import { Container, Row, Col } from 'reactstrap';

const App = () => (
  <div className="app my-5">
    <Container>
      <Row>
        <Col lg={{ size: 8, offset: 2 }}>
          <MainInfo />
          <Skills />
          <Codewars />
          <Projects />
        </Col>
      </Row>
    </Container>
  </div>
);

export default App;
