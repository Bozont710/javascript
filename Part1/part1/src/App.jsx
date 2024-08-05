import { useState } from 'react'


const History = ({ allClicks }) => {
  if (allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  else {
    return (
      <div>
        button press history: {allClicks.join(' ')}
        <br />
        number of button presses: {allClicks.length}
      </div>
    )
  }
}


const Button = ({ handleClicks, text }) => {
  return (
    <button onClick={handleClicks} >
      {text}
    </button>
  )
}


const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAllClicks] = useState([])
  
  const handleLeftClicks = () => {
    setAllClicks(allClicks.concat('L'))
    const updatedLeft = left + 1
    setLeft(updatedLeft)
  }

  const handleRightClicks = () => {
    setAllClicks(allClicks.concat('R'))
    const updatedRight = right + 1
    setRight(updatedRight)
  }

  return (
    <div>
      {left}
      <Button 
      handleClicks={handleLeftClicks}
      text='left'
      />
      <Button
      handleClicks={handleRightClicks}
      text='right'
      />
      {right}
      <History allClicks={allClicks} />
    </div>
  )
}

export default App