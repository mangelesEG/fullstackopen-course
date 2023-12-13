
import { useState } from 'react'
const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({handleClick,text}) => <button onClick={handleClick}>
  {text}
</button>


const App2 = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    
    console.log('left before', left)
    const leftclick = left+1;
    setLeft(leftclick)
    console.log('left after', leftclick)
    setTotal(leftclick + right)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const rightclick = right+1;
    setRight(rightclick)
    setTotal(left + rightclick)
  }

  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text='left'/>
      <Button handleClick={handleRightClick} text='right'/>
      {right}
      <br/>

      <br/>
      <History allClicks={allClicks} />
      
      <p>Total {total}</p>
    </div>
  )
}
export default App2