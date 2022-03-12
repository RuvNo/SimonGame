import React from 'react'
import '.././styles/global.css'
import './ClickButton.css'

const ClickButton = (props) => {
    const clickedButton = () => {
        props.setInputSequence(props.inputSequence + props.number)
        document.getElementById("information").textContent = "Go Play"
    }
    let className = "clickButton " + props.name 
    return (
        <div>
            <button className ={className} id={props.name} onClick={clickedButton}></button>
        </div>
    )
}

export default ClickButton