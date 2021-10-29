import React from 'react';
import { Button } from 'react-bootstrap';
import { EASY_INTERVALS, HARD_INTERVALS, MEDIUM_INTERVALS } from '../constants';

function Answer({ settings_intervals, semitones }) {
  const all_answers = Object.assign({}, EASY_INTERVALS, MEDIUM_INTERVALS, HARD_INTERVALS)
  return (
    <div className="answer-wrapper">
      {Object.values(all_answers).map(answer => {
        return <Button className="answer" key={answer} variant="primary">{answer}</Button>
      })}
    </div >
  )
}

export default Answer
