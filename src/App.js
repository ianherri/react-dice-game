import './App.css'
import Die from './components/Die'
import { useEffect, useState } from 'react'

function App() {
  const [dice, setDice] = useState([
    { id: 1, val: 0, selected: false },
    { id: 2, val: 1, selected: false },
    { id: 3, val: 1, selected: false },
    { id: 4, val: 1, selected: false },
    { id: 5, val: 1, selected: false },
    { id: 6, val: 1, selected: false },
    { id: 7, val: 1, selected: false },
    { id: 8, val: 1, selected: false },
    { id: 9, val: 1, selected: false },
  ])

  const [moveCount, setMoveCount] = useState(0)

  const diceComp = dice.map((die) => (
    <Die
      toggle={handleDieSelect}
      key={die.id}
      id={die.id}
      val={die.val}
      selected={die.selected}
    />
  ))

  function handleRollDice(event) {
    event.preventDefault()
    console.log('dice rolled')

    setDice((oldDice) =>
      oldDice.map((die) => {
        const randNum = Math.floor(Math.random() * 6)
        if (!die.selected) {
          return { ...die, val: randNum }
        } else {
          return { ...die }
        }
      })
    )
    setMoveCount((oldMoveCount) => oldMoveCount + 1)
  }

  function handleReset(event) {
    event.preventDefault()
    setDice((oldDice) =>
      oldDice.map((die) => {
        const randNum = Math.floor(Math.random() * 6)
        return { ...die, val: randNum, selected: false }
      })
    )
    setMoveCount(0)
  }

  useEffect(() => {
    const allEqual = dice.every(
      (die) => die.val === dice[0].val && die.selected === true
    )
    if (allEqual) {
      window.alert('game over!')
    }
  }, [dice])

  function handleDieSelect(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        if (die.id === id) {
          return { ...die, selected: !die.selected }
        } else {
          return { ...die }
        }
      })
    )
  }

  // Todo: improve handleDieClick click function that makes sure the clicked die has the same value as the other selected die..

  return (
    <div className='App'>
      <h1>Welcome to the game!</h1>
      {moveCount > 0 ? (
        <p>you are on move: {moveCount}</p>
      ) : (
        <p>click roll dice to begin</p>
      )}
      <div className='App-board'>{diceComp}</div>
      <button onClick={handleRollDice} className='Button-roll'>
        roll dice
      </button>
      <button onClick={handleReset} className='Button-roll'>
        reset game
      </button>
    </div>
  )
}

export default App
