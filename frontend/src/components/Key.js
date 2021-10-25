import React from 'react'

function Key({ note, is_playing, first_note, last_note }) {
  const key_class = note.includes('#') ? 'sus' : 'natural',
    is_playing_class = is_playing ? ' is-playing' : '',
    first = first_note.includes(note) ? ' first' : '',
    last = last_note.includes(note) ? ' second' : ''
  return (
    <div className={`key ${key_class}${is_playing_class}${first}${last}`} id={first || last}></div>
  )
}

export default Key
