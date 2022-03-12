import React from 'react'

const RestartButton = (props) => {

    const restartGame = () => {
        props.setCurrentSequence("")
        props.setInputSequence("")
        props.setUserInformation("Go Play")
        props.setCount(1)
    }
    
    return (
        <div>
            <button id="restartButton" onClick={restartGame}>Restart</button>
        </div>
    )
}

export default RestartButton