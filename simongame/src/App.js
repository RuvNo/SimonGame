import React, { useEffect, useState } from 'react'
import ClickButton from './ClickButton/ClickButton'
import RestartButton from './RestartButton/RestartButton'

const App = () => {

  const [currentSequence, setCurrentSequence] = useState([])
  const [rightOrWrong, setRightOrWrong] = useState("right")
  const [userInformation, setUserInformation] = useState("Go Play")


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
    if ((currentSequence.length === sequence.length) && rightOrWrong === "right!") {
      alert("YOU DID IT, CONGRATS!")
    }
  },[currentSequence])

  useEffect(() => {
    if(rightOrWrong === "wrong!") {
      setUserInformation("Sorry, you failed. Start again!")
    }
  }, [rightOrWrong])
  
  return (
    <div>
      <div id="information">{userInformation}</div>
      <RestartButton currentSequence={currentSequence} setCurrentSequence={setCurrentSequence} setUserInformation={setUserInformation} setRightOrWrong={setRightOrWrong}/>
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