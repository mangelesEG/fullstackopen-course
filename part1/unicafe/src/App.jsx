import { useState } from 'react'


const Button = ({ handleClick, text }) => <button onClick={handleClick}>
  {text}
</button>

const Display = ({ counter, text,unity }) => <tr><td>{text}</td><td>{counter}</td></tr>

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

     
      <Statitics good={good} bad={bad} neutral ={neutral} total={total} media={media} positive={positive}/>
    </div>
  )
}
const Statitics = ({good,bad,neutral,total,media,positive})=>{

if(total==0) return (
  <><h1>Statistics</h1>
  No feedback given
  </>)
else
return(<><table><thead><th><h2>Statistics</h2></th></thead>
<tbody>
<StatisticLine text="good" value={good} />
<StatisticLine text="neutral" value={neutral} />
<StatisticLine text="bad" value={bad} />
     
<StatisticLine text="all" value={total} />
<StatisticLine text="average" value={media} />
<StatisticLine text="positive" value={positive+'%'} />
</tbody></table>
</>)
}

const StatisticLine = ({text,value})=> {
  return (
    <>
    <Display text={text} counter={value} />
    </>
  )
}

export default App

function calculateMedia(neutral, goodClick, badClick, totalClick, setMedia) {
  const neutralClick = neutral
  const mediaClick = (((goodClick * 1) + (badClick * -1) + (neutralClick * 0)) / totalClick)
  setMedia(mediaClick)
}
