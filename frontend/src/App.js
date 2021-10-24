import './App.scss'
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import GameScreen from './screens/GameScreen'
import axios from 'axios'
import Loader from './components/Loader'

function App() {
  const loggedUserId = '123jcoij23' // mock
  const [user, getUser] = useState({})

  useEffect(() => {
    async function fetchUser() {
      const { data } = await axios.get(`/users/${loggedUserId}`)
      getUser({ data })
    }
    fetchUser()
  }, [])

  console.log(user)

  return (
    <BrowserRouter className="App">
      <Header />
      <main className="py-3">
        <Container>
          {user.settings === undefined ? <Loader /> : <GameScreen user_settings={user.settings} />}
          <Route path="/" component={HomeScreen} />
        </Container>
      </main>
    </BrowserRouter>
  )
}

export default App
