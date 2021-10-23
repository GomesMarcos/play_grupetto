import React from 'react'

function Key({ note }) {
  return <div className={note.includes('#') ? 'key sus' : 'key natural'}></div>
}

export default Key
