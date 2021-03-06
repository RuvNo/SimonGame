import React, { useEffect, useState } from 'react'
import ClickButton from './ClickButton/ClickButton'
import RestartButton from './RestartButton/RestartButton'
import './styles/global.css'
import Switch from './Switch/Switch'

const App = () => {
  const [inputSequence, setInputSequence] = useState("")
  const [currentSequence, setCurrentSequence] = useState("")
  const [userInformation, setUserInformation] = useState("Go Play")
  const [count, setCount] = useState(1)
  const [userTurn, setUserTurn] = useState(100)
  const [continuousCount, setContinuousCount] = useState(0)
  const [goalSequence, setGoalSequence] = useState("")
  const [strict, setStrict] = useState(false)

  let numbers = ["", "one", "two", "three", "four"]
  // This is used to get a random sequence at the beginning of the Game
  let sequence = ""
  for(let i = 0; i < 20; i++) {
    sequence += getRandomInt(4)
  }
  if(goalSequence === "") {
    setGoalSequence(String(sequence))
  }

  function restartGame() {
    setCurrentSequence("");
    setInputSequence("");
    setUserTurn(0)
    setContinuousCount(continuousCount + 1)
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
    
    if (document.getElementById("startRestartButton").textContent === "Restart") {
      setUserInformation("Restarted. Go Play");
      setCount(1)
      setTimeout(restartGame,1000)
    } else {
      setUserTurn(0)
      setContinuousCount(continuousCount + 1)
    }
    document.getElementById("startRestartButton").textContent = "Restart"
  }

  function playSound() {
    let mp3s = ["https://s3.amazonaws.com/freecodecamp/simonSound1.mp3", "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3", "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3", "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"]
    var tune = new Audio(mp3s[goalSequence[userTurn]-1])
    tune.play()
  }
  
  function pressButton() {
    document.getElementById(numbers[goalSequence[userTurn]]).classList.add("fakeClick")
    playSound()
    setTimeout(depressButton, 500) 
  }

  function depressButton() {
    document.getElementById(numbers[goalSequence[userTurn]]).classList.remove("fakeClick")
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
      },2000)
      
    }
    for (let i = 0; i < inputSequence.length; i++) {
      if (inputSequence[i] === currentSequence[i]) {
        } else {
          if (strict) {
            document.getElementById("information").textContent = "Wrong and the Game was strikt. Restart!"
            setInputSequence([])
            setCurrentSequence([])
            setCount(1)
            setUserTurn(0)
          } else {
            document.getElementById("information").textContent = "Wrong! Try Again!"
            setInputSequence([])
            setUserTurn(0)
            setContinuousCount(continuousCount + 1)
            
          }
        
      }
    }
  } 
  }, [inputSequence])

  return (
    <div>
      <h1>Simon</h1>
      <div id="information">{userInformation}</div>
      <div className="colorButtons">
        <div className="top">
          <ClickButton name="one" number="1" inputSequence={inputSequence} setInputSequence={setInputSequence} setCount={setCount} count={count}/>
          <ClickButton name="two" number="2" inputSequence={inputSequence} setInputSequence={setInputSequence} setCount={setCount} count={count}/>
        </div>
        <div className="mid">
          <button id="startRestartButton" onClick={playSequence}>startGame</button>
          <div id="count">Current Count: {count}</div>
        </div>
        <div className="bottom">
          <ClickButton name="three" number="3" inputSequence={inputSequence} setInputSequence={setInputSequence} setCount={setCount} count={count}/>
          <ClickButton name="four" number="4" inputSequence={inputSequence} setInputSequence={setInputSequence} setCount={setCount} count={count}/>
        </div>
      </div>
      <Switch Name="Strict" strict={strict} setStrict={setStrict}/>
    </div>
  )
}

export default App
