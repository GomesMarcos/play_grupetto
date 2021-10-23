import './App.scss'
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import GameScreen from './screens/GameScreen'

function App() {
  return (
    <BrowserRouter className="App">
      <Header />
      <main className="py-3">
        <Container>
          <GameScreen />
          <Route path="/" component={HomeScreen} />
          <Route path="/" />
          <Route path="/" />
        </Container>
      </main>
    </BrowserRouter>
  )
}

export default App
