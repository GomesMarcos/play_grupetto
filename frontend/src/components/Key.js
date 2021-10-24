import React from 'react'

function Key({ note, is_playing }) {
  const key_class = note.includes('#') ? 'sus' : 'natural'
  const is_playing_class = is_playing ? 'is-playing' : ''

  return <div className={`key ${key_class} ${is_playing_class}`}></div>
}

export default Key
