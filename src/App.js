import React from 'react'
import './AppStyles/App.css'
import backgroundImage from './AppImages/bg-desktop-dark.jpg'

import Main from './components/Main/Main'

function App() {
  return (
    <div className="app">
      <div className="spacer"></div>
      <div className="app__bg-img">
        <img src={backgroundImage} alt="" />
      </div>
      <div className="app__wrapper">
        <Main></Main>
      </div>
      <div className="spacer"></div>
    </div>
  )
}

export default App
