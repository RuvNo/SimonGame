import React from 'react'
import '.././styles/global.css'
import './ClickButton.css'

const ClickButton = (props) => {
    const clickedButton = () => {
        props.setInputSequence(props.inputSequence + props.number)
        document.getElementById("information").textContent = "Go Play"
    }
    let className = "pushable " + props.name 
    let className2 = "front " + props.name
    return (
        <div className="buttons">
            <button className ={className} onClick={clickedButton}>
                <span class={className2} id={props.name}></span>
            </button>
        </div>
    )
}

export default ClickButton