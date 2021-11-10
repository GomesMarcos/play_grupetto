import React from 'react'
import { Button } from 'react-bootstrap'
import { EASY_INTERVALS, HARD_INTERVALS, MEDIUM_INTERVALS } from '../constants'

function Answer({ settings_intervals, semitones }) {
  const all_answers = Object.assign({}, EASY_INTERVALS, MEDIUM_INTERVALS, HARD_INTERVALS)
  return (
    <div className="answer-wrapper">
      {Object.entries(all_answers).map((answer) => {
        const isValid = settings_intervals[answer[0]] !== undefined
        const isCorrectAnswer = parseInt(answer[0], 10) === semitones
        return isValid ? (
          <Button
            className={`answer`}
            key={answer[0]}
            variant="primary"
            onClick={checkAnswer}
            name={`${isCorrectAnswer}`}>
            {answer[1]}
          </Button>
        ) : (
          ''
        )
      })}
    </div>
  )
}

function checkAnswer(e) {
  e.preventDefault()
  console.log(e.target.name === 'true')
}

function handleCorrectAnswer() {
  // Play correct answer animation feedback
  // Emmit signal to GameComponent to Increase pontuation
  // Handle sequential assertions (every 3 hits generate a new life. Max ammount: 5 lives)
  // Emmit signal to sound component and generate new question
}

function handleWrongAnswer() {
  // Play wrong answer animation feedback
  // Emmit signal to GameComponent to damage a life
  // Emmit signal to sound component to repeat interval
}

export default Answer
