import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// buttons used for submitting feedback
const Button = ({onClick , text}) => (
  <button onClick={onClick}>
  {text}
  </button>
)

// statistic component always displays a single statistic
const Statistic = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({data:{ good, neutral, bad }} ) => {
  const total = good + neutral + bad;
  const average = good > 0 || bad > 0 ? (good - bad) / total : 0;
  const positive = good > 0 ? Math.round((good / total) * 100) + "%" : "0%";

  if(total === 0){
    return (
    <div>
      <p>No feedback given.</p>
    </div>
    )
  }

  return(
    <div>
      <table>
        <tbody>
          <Statistic text="good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />
          <Statistic text="average score" value={average} />
          <Statistic text="percentage of positive feedback" value={positive} />
        </tbody>
      </table>
    </div>
  )
}


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h3>Give Feedback</h3>
      <Button onClick={() => setGood(good + 1)} text='Good' />
      <Button onClick={() => setNeutral(neutral + 1)} text='Neutral' />
      <Button onClick={() => setBad(bad + 1)} text='Bad' />
      <h3>Statistics</h3>
      <Statistics data={{ good, neutral, bad }} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)