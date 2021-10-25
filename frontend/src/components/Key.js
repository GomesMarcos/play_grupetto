import React, { useState } from 'react'

function Key({ note, is_playing, first_note, last_note }) {
  const key_class = note.includes('#') ? 'sus' : 'natural',
    first = first_note.includes(note) ? ' first' : '',
    last = last_note.includes(note) ? ' second' : ''

  const [isPlayingClass, setIsPlayingClass] = useState(is_playing ? ' is-playing' : '')

  setTimeout(() => {
    setIsPlayingClass('')
  }, 1000)

  return <div className={`key ${key_class}${isPlayingClass}${first}${last}`}></div>
}

export default Key
