import { useState } from 'react'


const Button = (props) => {
  return (
    <button onClick={props.onClick} > {props.text} </button>
  )
}


const Display = (props) => {
  return (
    <div>
      <p> {props.text} </p>
      <p> has {props.votes} votes </p>
    </div>
  )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [highest, setHighest] = useState(0)

  const updateSelected = () => {
    const rand = Math.floor(Math.random() * anecdotes.length)
    setSelected(0 + rand)
  }

  const updateVotes = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    if (newVotes[selected] > newVotes[highest]) {
      updateHighest(selected)
    }
    setVotes(newVotes)
  }

  const updateHighest = () => {
    setHighest(selected)
  }

  console.log(selected)
  console.log(votes)

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <Display text={anecdotes[selected]} votes={votes[selected]} />
      <Button onClick={updateSelected} text='next anecdote' />
      <Button onClick={updateVotes} text='vote' />
      <h2>Anecdote with most votes</h2>
      <Display text={anecdotes[highest]} votes={votes[highest]} />
    </div>
  )
}

export default App