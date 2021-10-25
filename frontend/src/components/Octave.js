import React from 'react'
import Key from './Key'

function Octave({ octave, interval }) {
  return (
    <div className="octave">
      <div className="key-wrapper">
        <Key
          note="C"
          is_playing={interval.includes('C' + octave.toString())}
          first_note={interval[0]}
          last_note={interval[1]}
        />
        <Key
          note="C#"
          is_playing={interval.includes('C#' + octave.toString())}
          first_note={interval[0]}
          last_note={interval[1]}
        />
      </div>
      <div className="key-wrapper">
        <Key
          note="D"
          is_playing={interval.includes('D' + octave.toString())}
          first_note={interval[0]}
          last_note={interval[1]}
        />
        <Key
          note="D#"
          is_playing={interval.includes('D#' + octave.toString())}
          first_note={interval[0]}
          last_note={interval[1]}
        />
      </div>
      <Key
        note="E"
        is_playing={interval.includes('E' + octave.toString())}
        first_note={interval[0]}
        last_note={interval[1]}
      />
      <div className="key-wrapper">
        <Key
          note="F"
          is_playing={interval.includes('F' + octave.toString())}
          first_note={interval[0]}
          last_note={interval[1]}
        />
        <Key
          note="F#"
          is_playing={interval.includes('F#' + octave.toString())}
          first_note={interval[0]}
          last_note={interval[1]}
        />
      </div>
      <div className="key-wrapper">
        <Key
          note="G"
          is_playing={interval.includes('G' + octave.toString())}
          first_note={interval[0]}
          last_note={interval[1]}
        />
        <Key
          note="G#"
          is_playing={interval.includes('G#' + octave.toString())}
          first_note={interval[0]}
          last_note={interval[1]}
        />
      </div>
      <div className="key-wrapper">
        <Key
          note="A"
          is_playing={interval.includes('A' + octave.toString())}
          first_note={interval[0]}
          last_note={interval[1]}
        />
        <Key
          note="A#"
          is_playing={interval.includes('A#' + octave.toString())}
          first_note={interval[0]}
          last_note={interval[1]}
        />
      </div>
      <Key
        note="B"
        is_playing={interval.includes('B' + octave.toString())}
        first_note={interval[0]}
        last_note={interval[1]}
      />
    </div>
  )
}

export default Octave
