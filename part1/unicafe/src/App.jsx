import { useState } from 'react'


const Button = ({ handleClick, text }) => <button onClick={handleClick}>
  {text}
</button>

const Display = ({ counter, text,unity }) => <div>{text}: {counter} {unity}</div>

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [positive, setPositive]=useState(0)
  const [media, setMedia]=useState(0)

  const setGoodFeedback = () => {
    const goodClick = good + 1;
    setGood(goodClick); 
    console.log(goodClick)
    const totalClick=total+1;
    setTotal(totalClick);

    const positiveClick=((goodClick)/totalClick)*100;
    setPositive(positiveClick);
    
    calculateMedia(neutral, goodClick, bad, totalClick, setMedia)
  }
  const setBadFeedback = () => {
     const badClick = bad + 1;
     setBad(badClick); 
     const totalClick=total+1;
     setTotal(totalClick);
      
     const goodClick=good;
     const positiveClick=((goodClick)/totalClick)*100;
     setPositive(positiveClick);
     
    calculateMedia(neutral, goodClick, badClick, totalClick, setMedia)
    }
  const setNeutralFeedback = () => { 
    const neutralClick = neutral + 1;
    setNeutral(neutralClick); 
    const totalClick=total+1;
    setTotal(totalClick);   

    const goodClick=good;
    const positiveClick=((goodClick)/totalClick)*100;
    setPositive(positiveClick);

    const badClick = bad;
    
    calculateMedia(neutral, goodClick, badClick, totalClick, setMedia)
  }
 
  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={setGoodFeedback} text='good'></Button>
      <Button handleClick={setNeutralFeedback} text='neutral'></Button>
      <Button handleClick={setBadFeedback} text='bad'></Button>

      <h1>Statistics</h1>
      <Display text='good' counter={good} />
      <Display text='neutral' counter={neutral} />
      <Display text='bad' counter={bad} />
      <hr></hr>

      <Display text='all' counter={total} />
      <Display text='average' counter={media} />
      <Display text='positive' counter={positive} unity='%' />
    </div>
  )
}

export default App

function calculateMedia(neutral, goodClick, badClick, totalClick, setMedia) {
  const neutralClick = neutral
  const mediaClick = (((goodClick * 1) + (badClick * -1) + (neutralClick * 0)) / totalClick)
  setMedia(mediaClick)
}
