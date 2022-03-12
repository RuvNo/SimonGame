import React, { useEffect, useState } from 'react'
import ClickButton from './ClickButton/ClickButton'
import RestartButton from './RestartButton/RestartButton'
import './styles/global.css'

const App = () => {
  // Es wird viel zu viel am Anfang ausgeführt! Muss wahrscheinlich in die UseEffects Bedingungen reinmachen..
  // Also dass die nur was machen sollen, wenn Count > 1 ist oder so..
  const [inputSequence, setInputSequence] = useState("")
  const [goalSequence, setGoalSequence] = useState()
  const [currentSequence, setCurrentSequence] = useState("")
  const [userInformation, setUserInformation] = useState("Go Play")
  const [count, setCount] = useState(1)
  const [userTurn, setUserTurn] = useState(100)
  const [continuousCount, setContinuousCount] = useState(0)

  let sequence = "1234321"

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  useEffect(() => {
    console.log("useEffect")
    if(userTurn < 100) {
      pressButton()
    }
  }, [continuousCount])

  function playSequence() {
    setUserTurn(0)
    setContinuousCount(continuousCount + 1)
  }
  
  function pressButton() {
    document.getElementById(String(sequence[userTurn])).classList.add("clicked")
    setTimeout(depressButton, 2000) 
  }

  function depressButton() {
    document.getElementById(String(sequence[userTurn])).classList.remove("clicked")
    if (userTurn < currentSequence.length - 1) {
      setUserTurn(userTurn + 1)
      setContinuousCount(continuousCount + 1)
    }
  }

  if (currentSequence.length === 0) {
    setCurrentSequence(currentSequence + sequence[0])
  }

  useEffect(() => {
    if(inputSequence === sequence) {
      alert("Congrats - you won!")
    } else {
    if(inputSequence === currentSequence) {
      setInputSequence("")
      setCount(count + 1)
      setCurrentSequence(currentSequence + sequence[count])
      console.log(userTurn)
      console.log("userTurn")
      setUserTurn(0)
      setContinuousCount(continuousCount + 1)
    }
    for (let i = 0; i < inputSequence.length; i++) {
      if (inputSequence[i] === currentSequence[i]) {
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
      <RestartButton currentSequence={currentSequence} setCurrentSequence={setCurrentSequence} setUserInformation={setUserInformation} setInputSequence={setInputSequence} setCount={setCount}/>
      <ClickButton name="1" inputSequence={inputSequence} setInputSequence={setInputSequence} setCount={setCount} count={count}/>
      <ClickButton name="2" inputSequence={inputSequence} setInputSequence={setInputSequence} setCount={setCount} count={count}/>
      <ClickButton name="3" inputSequence={inputSequence} setInputSequence={setInputSequence} setCount={setCount} count={count}/>
      <ClickButton name="4" inputSequence={inputSequence} setInputSequence={setInputSequence} setCount={setCount} count={count}/>
      <div id="currentSequence">Current Sequence: {currentSequence}</div>
      <div id="inputSequence">Input Sequence: {inputSequence}</div>
      <div id="count">Current Count: {count}</div>
      <div id="sequencefield"></div>
      <button onClick={playSequence}>startGame</button>
    </div>
  )
}

export default App