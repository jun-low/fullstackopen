import React, { useState } from 'react'
import ReactDOM from 'react-dom'   

const Button = ({action , text}) => {
  return(
    <button onClick={action}>{text}</button>
  )
}

const App = () => {
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(new Array(anecdotes.length).fill(0))

  const getRandomAnecdote = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNumber);
  };

  const addVote = () => {
    let newVotes = [...votes]
    newVotes[selected] += 1
    setVote(newVotes)
  }

  const getLargestVote = () => {
    let largest = Math.max(...votes)
    return votes.indexOf(largest)
  }

  return (
    <div>
      <h3>Anecdotes of the day</h3>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes.</p>
      <Button text='Vote' action={addVote} />
      <Button text='Next Anecdotes' action={getRandomAnecdote} />
      <br />
      <h3>Anecdotes with most vote</h3>
      <p>{anecdotes[getLargestVote()]}</p>
      <p>has {votes[getLargestVote()]} votes.</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)