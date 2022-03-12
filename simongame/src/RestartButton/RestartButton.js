import React from 'react'

const RestartButton = (props) => {

    const restartGame = () => {
        props.setCurrentSequence([])
        props.setUserInformation("Go Play")
        props.setRightOrWrong("right!")
    }
    return (
        <div>
            <button id="restartButton" onClick={restartGame}>Restart</button>
        </div>
    )
}

export default RestartButton