import React from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = React.useState(false)
  function toggleDarkMode() {
    setDarkMode(prevState => !prevState)
  }

  return (
    <div className={darkMode ? "container--dark" : "container"}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Main darkMode={darkMode}/>
      <Footer darkMode={darkMode}/>
    </div>
  )
}

export default App
