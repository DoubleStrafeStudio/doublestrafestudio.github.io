import { React, useState } from 'react'
import './CatechismApp.css'
import useLocalStorage from 'use-local-storage';
import { Nav } from './ncc-nav.jsx';
import { Practice } from './catechism-practice.jsx';


function CatechismApp() {
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
      </header>
      <main >
        <Practice />
      </main>
    </div>
  )
}

export default CatechismApp;
