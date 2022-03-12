import React from 'react'

const ClickButton = (props) => {
    const clickedButton = () => {
        props.setCurrentSequence(props.currentSequence + props.name)
    }
    return (
        <div>
            <button onClick={clickedButton}>{props.name}</button>
        </div>
    )
}

export default ClickButton