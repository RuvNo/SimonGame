import React, { useEffect, useState } from 'react'
import ClickButton from './ClickButton/ClickButton'
import RestartButton from './RestartButton/RestartButton'
import './styles/global.css'

const App = () => {
  // Es wird viel zu viel am Anfang ausgeführt! Muss wahrscheinlich in die UseEffects Bedingungen reinmachen..
  // Also dass die nur was machen sollen, wenn Count > 1 ist oder so..
  const [inputSequence, setInputSequence] = useState("")
  const [currentSequence, setCurrentSequence] = useState("")
  const [userInformation, setUserInformation] = useState("Go Play")
  const [count, setCount] = useState(1)
  const [userTurn, setUserTurn] = useState(100)
  const [continuousCount, setContinuousCount] = useState(0)
  const [goalSequence, setGoalSequence] = useState("")

  // This is used to get a random sequence at the beginning of the Game
  let sequence = ""
  for(let i = 0; i < 20; i++) {
    sequence += getRandomInt(4)
  }
  if(goalSequence === "") {
    setGoalSequence(String(sequence))
  }
  
  function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
  }

  useEffect(() => {
    if(userTurn < 100) {
      pressButton()
    }
  }, [continuousCount])

  function playSequence() {
    setUserTurn(0)
    setContinuousCount(continuousCount + 1)
  }
  
  function pressButton() {
    document.getElementById(String(goalSequence[userTurn])).classList.add("clicked")
    setTimeout(depressButton, 500) 
  }

  function depressButton() {
    document.getElementById(String(goalSequence[userTurn])).classList.remove("clicked")
    setTimeout(function() { // This setup lets me implement a small timeout to make the game feel more natural
      if (userTurn < currentSequence.length - 1) {
        setUserTurn(userTurn + 1)
        setContinuousCount(continuousCount + 1)
      }
    }, 500)
    
  }

  if (currentSequence.length === 0 && goalSequence.length > 0) {
    setCurrentSequence(currentSequence + goalSequence[0])
  }

  useEffect(() => {
    if(inputSequence === goalSequence) {
      alert("Congrats - you won!")
    } else {
    if(inputSequence === currentSequence) {
      setTimeout(function(){ // This setup lets me implement a small timeout to make the game feel more natural
        setInputSequence("")
        setCount(count + 1)
        setCurrentSequence(currentSequence + goalSequence[count])
        setUserTurn(0)
        setContinuousCount(continuousCount + 1)
      },500)
      
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