import { React, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import useLocalStorage from 'use-local-storage';
import { Nav } from './components/nav'
import { Intro } from './components/intro'

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <div className="App" data-lightdark={theme}>
      <div className='content-wrapper'>
        <button onClick={switchTheme}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
        <Nav />
        {/* <img src='./src/components/2-fullsize-name.png' height="96"/> */}
        <Intro />
      </div>
    </div>
  )
}

export default App
