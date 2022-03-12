import React from 'react'

const ClickButton = (props) => {
    const clickedButton = () => {
        props.setInputSequence(props.inputSequence + props.name)
    }
    return (
        <div>
            <button onClick={clickedButton}>{props.name}</button>
        </div>
    )
}

export default ClickButton