import React, { Component } from 'react'

import polaroid from './gfx/polaroid.png'
import github from './gfx/github.png'
import linkedin from './gfx/linkedin.png'
import twitter from './gfx/twitter.png'
import instagram from './gfx/instagram.png'

import './App.css'


class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={polaroid} className='App-logo' alt='logo' />
          <h2 className='App-title'>Morten Broesby-Olsen</h2>
        </div>
        <p className='App-intro'>
          <a href='https://github.com/mortenbroesby/'>
            <img src={github} className='App-links' alt='github' />
          </a>
          <a href='https://www.linkedin.com/in/morten-broesby-olsen/'>
            <img src={linkedin} className='App-links' alt='linkedin' />
          </a>
          <a href='https://twitter.com/mortenbroesby'>
            <img src={twitter} className='App-links' alt='twitter' />
          </a>
          <a href='https://www.instagram.com/mortenbroesby/'>
            <img src={instagram} className='App-links' alt='instagram' />
          </a>
        </p>
      </div>
    )
  }
}

export default App
