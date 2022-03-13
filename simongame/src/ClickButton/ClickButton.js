import React from 'react'
import '.././styles/global.css'
import './ClickButton.css'

const ClickButton = (props) => {
    const clickedButton = () => {
        props.setInputSequence(props.inputSequence + props.number)
        document.getElementById("information").textContent = "Go Play"
        playSound()
    }

    function playSound() {
        let mp3s = ["https://s3.amazonaws.com/freecodecamp/simonSound1.mp3", "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3", "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3", "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"]
        var tune = new Audio(mp3s[props.number-1])
        tune.play()
      }
    let className = "pushable " + props.name 
    let className2 = "front " + props.name
    return (
        <div className="buttons">
            <button className ={className} onClick={clickedButton}>
                <span className={className2} id={props.name}></span>
            </button>
        </div>
    )
}

export default ClickButton