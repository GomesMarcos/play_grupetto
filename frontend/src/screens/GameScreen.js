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

function GameScreen({ user_settings }) {
  const setted_intervals = get_intervals_by_difficulty(user_settings.difficulty)
  const interval = get_interval(setted_intervals, user_settings.direction)

  //create a synth and connect it to the main output (your speakers)
  const synth = new Tone.Synth().toDestination()

  //play a middle 'C' for the duration of an 8th note
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

function get_interval(settings_intervals, direction = undefined) {
  // Set interval
  let interval = set_interval()

  // Retunr validated interval
  return validate_interval(interval, direction, settings_intervals)
}

function set_interval() {
  return [Math.floor(Math.random() * NOTES.length), Math.floor(Math.random() * NOTES.length)]
}

function validate_interval(interval, direction, settings_intervals) {
  const subtracted_interval = Math.abs(interval[0] - interval[1])
  const is_interval_in_settings_intervals = settings_intervals[subtracted_interval] != undefined

  // If Ascendent Interval
  if (direction === 1 && interval[0] <= interval[1] && is_interval_in_settings_intervals) {
    return interval
  }

  // If Descendent Interval
  if (direction === 2 && interval[0] >= interval[1] && is_interval_in_settings_intervals) {
    return interval
  }

  // If Directions not matters
  if (is_interval_in_settings_intervals) {
    return interval
  }

  return validate_interval(set_interval(), direction, settings_intervals)
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
