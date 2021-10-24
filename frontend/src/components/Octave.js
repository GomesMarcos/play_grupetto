import React from 'react'
import Key from './Key'

function Octave({ octave, interval }) {
  return (
    <div className="octave">
      <div className="key-wrapper">
        <Key note="C" is_playing={interval.includes('C')} />
        <Key note="C#" is_playing={interval.includes('C#')} />
      </div>
      <div className="key-wrapper">
        <Key note="D" is_playing={interval.includes('D')} />
        <Key note="D#" is_playing={interval.includes('D#')} />
      </div>
      <Key note="E" is_playing={interval.includes('E')} />
      <div className="key-wrapper">
        <Key note="F" is_playing={interval.includes('F')} />
        <Key note="F#" is_playing={interval.includes('F#')} />
      </div>
      <div className="key-wrapper">
        <Key note="G" is_playing={interval.includes('G')} />
        <Key note="G#" is_playing={interval.includes('G#')} />
      </div>
      <div className="key-wrapper">
        <Key note="A" is_playing={interval.includes('A')} />
        <Key note="A#" is_playing={interval.includes('A#')} />
      </div>
      <Key note="B" is_playing={interval.includes('B')} />
    </div>
  )
}

export default Octave
