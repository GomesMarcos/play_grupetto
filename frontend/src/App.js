import './App.scss'
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import GameScreen from './screens/GameScreen'
import axios from 'axios'

function App() {
  const user_settings = get_user_settings('123jcoij23')
  return (
    <BrowserRouter className="App">
      <Header />
      <main className="py-3">
        <Container>
          <GameScreen user_settings={user_settings} />
          <Route path="/" component={HomeScreen} />
          <Route path="/" />
          <Route path="/" />
        </Container>
      </main>
    </BrowserRouter>
  )
}

export default App

async function get_user_settings(user_id) {
  const user = await get_user(user_id)
  const settings = await get_settings(user.data.settings)
  return settings
}

function get_settings(settings_id) {
  return axios.get(`/settings/${settings_id}/`)
}

function get_user(user_id) {
  return axios.get(`/users/${user_id}/`)
}
