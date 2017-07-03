import React, { Component } from 'react';
import logo from './logo.svg';
import { Container, Header } from 'semantic-ui-react'
import './App.css';

class App extends Component {
  render() {
    return (
      <Container text>
        <Header as='h2'>Header</Header>
        <p>Woot</p>
        <p>Woot</p>
        <p>Woot</p>
        <p>Woot</p>
      </Container>
    );
  }
}

export default App;
