import React from 'react'
import * as Tone from 'tone'

function Sound({ interval_notes, octave_played, is_chord = false }) {
  const synth = new Tone.Synth().toDestination()
  let timeToPlay = Tone.now()
  interval_notes.forEach((note) => {
    synth.triggerAttackRelease(`${note}${octave_played}`, '8n', timeToPlay)
    timeToPlay += is_chord ? 0.0005 : 0.5
  })
  return true
}

export default Sound
