import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js'
import Projects from './components/Projects.js'
import Skills from './components/Skills.js'
import Footer from './components/Footer.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Projects />
        <Skills />
        <Footer />
      </div>
    );
  }
}

export default App;
