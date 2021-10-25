import * as Tone from 'tone'

function Sound({ interval_notes, is_chord = 1 }) {
  const synth =
    is_chord === 1 ? new Tone.PolySynth().toDestination() : new Tone.Synth().toDestination()
  let timeToPlay = Tone.now()

  interval_notes.forEach((note) => {
    synth.triggerAttackRelease(`${note}`, 0.35, timeToPlay)
    timeToPlay += is_chord === 1 ? 0 : 0.5
  })

  return true
}

export default Sound
