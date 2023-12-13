import { useState } from 'react'


const Button = ({handleClick,text}) => <button onClick={handleClick}>
  {text}
</button>

const Display = ({ counter,text }) => <div>{text}: {counter}</div>

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setGoodFeedback = () => setGood(good + 1)
  const setBadFeedback = () => setBad(bad + 1)
  const setNeutralFeedback = () => setNeutral(neutral + 1)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={setGoodFeedback} text='good'></Button>
      <Button handleClick={setNeutralFeedback} text='neutral'></Button>
      <Button handleClick={setBadFeedback} text='bad'></Button>

      <h1>Statistics</h1>
      <Display text='good' counter={good}/>
      <Display text='neutral' counter={neutral}/>
      <Display text='bad' counter={bad}/>
      </div>
  )
}

export default App