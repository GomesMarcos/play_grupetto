import React from 'react'
import Key from './Key'

function Octave({ octave, interval }) {
  return (
    <div className="octave">
      <div className="key-wrapper">
        <Key note="C" is_playing={interval.includes('C' + octave.toString())} />
        <Key note="C#" is_playing={interval.includes('C#' + octave.toString())} />
      </div>
      <div className="key-wrapper">
        <Key note="D" is_playing={interval.includes('D' + octave.toString())} />
        <Key note="D#" is_playing={interval.includes('D#' + octave.toString())} />
      </div>
      <Key note="E" is_playing={interval.includes('E' + octave.toString())} />
      <div className="key-wrapper">
        <Key note="F" is_playing={interval.includes('F' + octave.toString())} />
        <Key note="F#" is_playing={interval.includes('F#' + octave.toString())} />
      </div>
      <div className="key-wrapper">
        <Key note="G" is_playing={interval.includes('G' + octave.toString())} />
        <Key note="G#" is_playing={interval.includes('G#' + octave.toString())} />
      </div>
      <div className="key-wrapper">
        <Key note="A" is_playing={interval.includes('A' + octave.toString())} />
        <Key note="A#" is_playing={interval.includes('A#' + octave.toString())} />
      </div>
      <Key note="B" is_playing={interval.includes('B' + octave.toString())} />
    </div>
  )
}

export default Octave
