/* 
Components:
  Ads (interstitial on Continue)
  Life
  Octave
  Answer

  Play/Pause

  Ads (small)
*/

import React from 'react'
import * as Tone from 'tone'
import axios from 'axios'
import { EASY_INTERVALS, MEDIUM_INTERVALS, HARD_INTERVALS, NOTES } from '../constants'

import Octave from '../components/Octave'

function GameScreen({ user_id }) {
  const user_settings = get_user_settings(user_id)
  console.log(user_settings)
  const setted_intervals = get_intervals_by_difficulty(user_settings.data.difficulty)
  console.log(setted_intervals)

  //create a synth and connect it to the main output (your speakers)
  const synth = new Tone.Synth().toDestination()

  //play a middle 'C' for the duration of an 8th note
  const interval = get_interval(NOTES)
  console.log(interval)
  console.log(`${NOTES[interval[0]]}`, `${NOTES[interval[1]]}`)
  // synth.triggerAttackRelease(`${NOTES[interval[0]]}`, '8n')
  // synth.triggerAttackRelease(`${NOTES[interval[1]]}`, '8n')

  return (
    <div>
      <div className="octave">
        <Octave octave="3" />
        <Octave octave="4" />
        <Octave octave="5" />
      </div>
    </div>
  )
}
export default GameScreen

function get_interval(NOTES, direction = null) {
  switch (direction) {
    // Ascendent interval
    case 1:
      return get_ascendent_interval(NOTES)

    // Descendent interval
    case 2:
      return get_descendent_interval(NOTES)

    default:
      const interval = []
      interval.push(Math.floor(Math.random() * NOTES.length))
      interval.push(Math.floor(Math.random() * NOTES.length))

      return interval
  }
}

function get_ascendent_interval(NOTES) {
  const interval = []
  interval[0] = Math.floor(Math.random() * NOTES.length)
  let random = Math.floor(Math.random() * NOTES.length)

  if (random >= interval[0]) {
    interval.push(random)
    return interval
  }

  return get_ascendent_interval(NOTES)
}
function get_descendent_interval(NOTES) {
  const interval = []
  interval[0] = Math.floor(Math.random() * NOTES.length)
  let random = Math.floor(Math.random() * NOTES.length)

  if (random <= interval[0]) {
    interval.push(random)
    return interval
  }

  return get_descendent_interval(NOTES)
}

async function get_user_settings(user_id) {
  const user = await get_user(user_id)
  const settings = await get_settings(user.data.settings)
  return user, settings
}

function get_settings(settings_id) {
  return axios.get(`/settings/${settings_id}/`)
}

function get_user(user_id) {
  return axios.get(`/users/${user_id}/`)
}

function get_intervals_by_difficulty(difficulty) {
  switch (difficulty) {
    case 1:
      return EASY_INTERVALS

    case 2:
      return EASY_INTERVALS + MEDIUM_INTERVALS

    case 3:
      return EASY_INTERVALS + MEDIUM_INTERVALS + HARD_INTERVALS

    default:
      return EASY_INTERVALS
  }
}
