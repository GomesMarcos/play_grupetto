import React from 'react'
import Key from './Key'

function Octave({ octave }) {
  return (
    <div className="octave">
      <div className="key-wrapper">
        <Key note="C" />
        <Key note="C#" />
      </div>
      <div className="key-wrapper">
        <Key note="D" />
        <Key note="D#" />
      </div>
      <Key note="E" />
      <div className="key-wrapper">
        <Key note="F" />
        <Key note="F#" />
      </div>
      <div className="key-wrapper">
        <Key note="G" />
        <Key note="G#" />
      </div>
      <div className="key-wrapper">
        <Key note="A" />
        <Key note="A#" />
      </div>
      <Key note="B" />
    </div>
  )
}

export default Octave
