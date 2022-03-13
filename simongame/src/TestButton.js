import React from 'react'
import './TestButton.css'

const TestButton = (props) => {
    
  var snd = new Audio(props.fileName);
  function click() {
    snd.play()
  }
  return (
        <div>
            

<button class="pushable" onClick={click}>
  <span class="front">
    Push me
  </span>
</button>
        </div>
    )
}

export default TestButton