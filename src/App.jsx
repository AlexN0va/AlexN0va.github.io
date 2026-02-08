import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import Header from './components/Header'
import Intro from './components/Intro'
import About from './components/About'
import Skills from './components/Skills'
import Coursework from './components/Coursework'
import Work from './components/Work'
import Footer from './components/Footer'
import ProjectDetail from './components/ProjectDetail'

function Home() {
  const [isRealmChanged, setIsRealmChanged] = useState(false)

  return (
    <>
      <Hero isRealmChanged={isRealmChanged} />
      <Header onRealmChange={() => setIsRealmChanged(!isRealmChanged)} />
      <Intro />
      <div className="details container">
        <About />
        <Skills />
        <Coursework />
        <Work />
      </div>
      <Footer />
    </>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:projectId" element={<ProjectDetail />} />
      </Routes>
    </Router>
  )
}

export default App
