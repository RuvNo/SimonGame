import React from 'react'
import './Switch.css'

const Switch = (props) => {

    function determineStrict() {
        if (props.strict===false){
            props.setStrict(true)
        } else {
            props.setStrict(false)
        }
    }
    return (
        <div className="toggle-switch">
        <label className="switch" >
            <input id ="enemyChoice" type="checkbox" onClick={determineStrict}></input>
            <span className="slider round"></span>
            <label>Strict</label>
            </label>
      </div>
    )
}

export default Switch