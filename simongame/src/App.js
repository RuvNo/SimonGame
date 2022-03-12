import React, { useEffect, useState } from 'react'
import ClickButton from './ClickButton/ClickButton'

const App = () => {

  const [currentSequence, setCurrentSequence] = useState([])
  const [rightOrWrong, setRightOrWrong] = useState("right")
  let sequence = [1,4,3,2,3,2,2,2,1,4,3]
  const getSequence = (max) => {
    for (let i = 0; i < max; i++) {
      sequence.push(Math.floor(Math.random() * 4)+1)
    }
  }
  if (sequence.length === 0) {
    getSequence(20)
  }
  
  useEffect(() => {
    for (let i = 0; i < currentSequence.length; i++) {
      if (parseInt(currentSequence[i]) === sequence[i]) {
        setRightOrWrong("right!")
      } else {
        setRightOrWrong("wrong!")
        i = currentSequence.length
      }
    }
  },[currentSequence])
  
  return (
    <div>
      Hallo
      <ClickButton name="1" currentSequence={currentSequence} setCurrentSequence={setCurrentSequence}/>
      <ClickButton name="2" currentSequence={currentSequence} setCurrentSequence={setCurrentSequence}/>
      <ClickButton name="3" currentSequence={currentSequence} setCurrentSequence={setCurrentSequence}/>
      <ClickButton name="4" currentSequence={currentSequence} setCurrentSequence={setCurrentSequence}/>
      <div id="sequence">{sequence}</div>
      <div id="currentSequence">{currentSequence}</div>
      <div id="rightOrWrong">{rightOrWrong}</div>
    </div>
  )
}

export default App