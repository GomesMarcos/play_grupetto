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
import Answer from '../components/Answer'
import Octave from '../components/Octave'
import Sound from '../components/Sound'
import { AVAILABE_OCTAVES, EASY_INTERVALS, HARD_INTERVALS, MEDIUM_INTERVALS, NOTES } from '../constants'

function GameScreen({ user_settings }) {
  const settings_intervals = get_intervals_by_difficulty(user_settings.difficulty),
    direction = user_settings.direction,
    interval = get_interval(settings_intervals, direction),
    semitones = Math.abs(interval[0] - interval[1]),
    octaves = user_settings.octaves,
    interval_nature = user_settings.interval,
    octave_played = octaves[Math.floor(Math.random() * octaves.length)],
    interval_notes = [
      NOTES[interval[0]] + octave_played.toString(),
      NOTES[interval[1]] + octave_played.toString(),
    ]

  return (
    <div className="game">
      <div className="octave-wrapper">
        <Sound interval_notes={interval_notes} is_chord={interval_nature} />
        {
          AVAILABE_OCTAVES.map((available) =>
            < Octave key={available} octave={available} interval={interval_notes} is_enabled={octaves.includes(available) ? true : false} />
          )
        }
      </div>

      <Answer settings_intervals={settings_intervals} semitones={semitones} />
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
  const semitones = Math.abs(interval[0] - interval[1])
  const is_interval_in_settings_intervals = settings_intervals[semitones] !== undefined

  // If is valid interval
  if (is_interval_in_settings_intervals) {
    // If Ascendent Interval
    if (direction === 1) {
      if (interval[0] <= interval[1]) {
        return interval
      }
      return validate_interval(set_interval(), direction, settings_intervals)
    }

    // If Descendent Interval
    if (direction === 2) {
      if (interval[0] >= interval[1]) {
        return interval
      }
      return validate_interval(set_interval(), direction, settings_intervals)
    }

    // If Directions not matters
    return interval
  }
  return validate_interval(set_interval(), direction, settings_intervals)
}

function get_intervals_by_difficulty(difficulty) {
  switch (difficulty) {
    case 1:
      return Object.assign({}, EASY_INTERVALS)

    case 2:
      return Object.assign({}, EASY_INTERVALS, MEDIUM_INTERVALS)

    case 3:
      return Object.assign({}, EASY_INTERVALS, MEDIUM_INTERVALS, HARD_INTERVALS)

    default:
      return Object.assign({}, EASY_INTERVALS)
  }
}
