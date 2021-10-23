import React from 'react'
import Key from './Key'

function Octave() {
  return (
    <div className="octave">
      <div className="key-wrapper">
        <Key note="do" />
        <Key note="do#" />
      </div>
      <div className="key-wrapper">
        <Key note="re" />
        <Key note="re#" />
      </div>
      <Key note="mi" />
      <div className="key-wrapper">
        <Key note="fa" />
        <Key note="fa#" />
      </div>
      <div className="key-wrapper">
        <Key note="sol" />
        <Key note="sol#" />
      </div>
      <div className="key-wrapper">
        <Key note="la" />
        <Key note="la#" />
      </div>
      <Key note="si" />
    </div>
  )
}

export default Octave
