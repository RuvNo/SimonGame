import React from 'react'
import '.././styles/global.css'

const ClickButton = (props) => {
    const clickedButton = () => {
        props.setInputSequence(props.inputSequence + props.name)
    }
    return (
        <div>
            <button className ="clickButton" id={props.name} onClick={clickedButton}>{props.name}</button>
        </div>
    )
}

export default ClickButton