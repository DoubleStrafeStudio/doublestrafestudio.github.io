import { React, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import useLocalStorage from 'use-local-storage';
import { Nav } from './components/nav'
import { Intro } from './components/intro'
import { ProjectSummary } from './components/project-summary';

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <div className="App" data-lightdark={theme}>
      <header >
        <Nav />
        <button onClick={switchTheme}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
      </header>

      <div className='content-wrapper'>
        <main >
          <Intro />
          <ProjectSummary name="Youth Group Games Database"/>
          <ProjectSummary name="College Football Community Challenge"/>
        </main>
      </div>

      <footer>
        <div className='footer-content-wrapper'>
          Footer placeholder
          <br />
          (C) DoubleStrafe Studio
          All Right Reserved.
          <br />
          Site Map
        </div>
      </footer>
    </div>
  )
}

export default App
