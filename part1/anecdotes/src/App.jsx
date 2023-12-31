import { useState } from 'react'

const App = () => {
 
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
const initial = new Array(6).fill(0)
  const [points,setPoints]=useState(initial)
  const [selected, setSelected] = useState(0)
  const [maxVotes, setMaxVotes] = useState(0)
  const [mostPopulate, setMostPopulate] = useState('')
  
function calculateMostPopulate(pointsValue) {
  const index = pointsValue.indexOf( Math.max(...pointsValue))
  setMaxVotes(Math.max(...pointsValue))
  console.log('Votos max', Math.max(...pointsValue))
  const mostPopulateAnecdote = anecdotes[index]
  console.log('Anecdota',mostPopulateAnecdote, 'en indice',index)
  
  setMostPopulate(mostPopulateAnecdote)
}

  const showAnecdoteClick = () => {
    const min = 0;
    const max = 5;
    let random = Math.floor(Math.random() * (max- min+ 1)) + min;
    console.log("Random Number Generated : " + random);
    setSelected(random);
  }
  const addVoteClick = () =>{
    const copy =[...points]
    copy[selected]+=1
    setPoints(copy)
    calculateMostPopulate(copy)
  }
  if(mostPopulate!="") return (
    <div>
      <h1> Anecdote of the day</h1>
     <p>{anecdotes[selected]}<br></br> has {points[selected]} votes </p>
      <br></br>
      <button onClick={showAnecdoteClick}>Next anecdote</button>
      <button onClick={addVoteClick}>Vote</button>
      <h1> Anecdote with most votes</h1>
      <p>{mostPopulate}<br></br> has {maxVotes} votes </p>
    </div>
  )
  else return(<div>
    <h1> Anecdote of the day</h1>
   <p>{anecdotes[selected]}<br></br> has {points[selected]} votes </p>
    <br></br>
    <button onClick={showAnecdoteClick}>Next anecdote</button>
    <button onClick={addVoteClick}>Vote</button>
    <h1> Anecdote with most votes</h1>
  </div>)
}

export default App
