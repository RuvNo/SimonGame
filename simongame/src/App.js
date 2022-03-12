import React, { useEffect, useState } from 'react'
import ClickButton from './ClickButton/ClickButton'
import RestartButton from './RestartButton/RestartButton'

const App = () => {
  // Es wird viel zu viel am Anfang ausgeführt! Muss wahrscheinlich in die UseEffects Bedingungen reinmachen..
  // Also dass die nur was machen sollen, wenn Count > 1 ist oder so..
  const [inputSequence, setInputSequence] = useState([])
  const [currentSequence, setCurrentSequence] = useState([])
  const [userInformation, setUserInformation] = useState("Go Play")
  const [count, setCount] = useState(1)

  let sequence = "1432314"

  if (currentSequence.length === 0) {
    currentSequence.push(sequence[0])
  }

  useEffect(() => {
    if(inputSequence == parseInt(sequence)) {
      alert("Congrats - you won!")
    } else {
    if(inputSequence == parseInt(currentSequence)) {
      setInputSequence([])
      setCount(count + 1)
      setCurrentSequence(currentSequence + sequence[count])
    }
    for (let i = 0; i < inputSequence.length; i++) {
      if (parseInt(inputSequence[i]) == currentSequence[i]) {
        } else {
        setInputSequence([])
        setCurrentSequence([])
        setCount(1)
      }
    }
  } 
  }, [inputSequence])

  return (
    <div>
      <div id="information">{userInformation}</div>
      <RestartButton currentSequence={currentSequence} setCurrentSequence={setCurrentSequence} setUserInformation={setUserInformation} />
      <ClickButton name="1" inputSequence={inputSequence} setInputSequence={setInputSequence} setCount={setCount} count={count}/>
      <ClickButton name="2" inputSequence={inputSequence} setInputSequence={setInputSequence} setCount={setCount} count={count}/>
      <ClickButton name="3" inputSequence={inputSequence} setInputSequence={setInputSequence} setCount={setCount} count={count}/>
      <ClickButton name="4" inputSequence={inputSequence} setInputSequence={setInputSequence} setCount={setCount} count={count}/>
      <div id="sequence">Goal Sequence: {sequence}</div>
      <div id="currentSequence">Current Sequence: {currentSequence}</div>
      <div id="inputSequence">Input Sequence: {inputSequence}</div>
      <div id="count">Current Count: {count}</div>
    </div>
  )
}

export default App