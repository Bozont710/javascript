import { useState } from 'react'


const Button = (props) => {
  return (
    <button onClick={props.onClick} > {props.text} </button>
  )
}


const StatisticLine = (props) => {
  return (
    <tr>
      <td> {props.text} </td>
      <td> {props.value} </td>
    </tr>
  )
}


const Statistics = (props) => {
  if ((props.good + props.neutral + props.bad) == 0) {
    return (
      <div>
        <p> No feedback given </p>
      </div>
    )
  }
  return (
    <table>
      <tbody>
        <StatisticLine text='good' value={props.good} />
        <StatisticLine text='neutral' value={props.neutral} />
        <StatisticLine text='bad' value={props.bad} />
        <StatisticLine text='average' value={(props.good - props.bad)/(props.good + props.neutral + props.bad)} />
        <StatisticLine text='positive' value={(100 / (props.bad + props.neutral + props.good)) * props.good} />
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  return (
    <div>
      <h2>give feedback</h2>
      <Button onClick={handleGood} text='good' />
      <Button onClick={handleNeutral} text='neutral' />
      <Button onClick={handleBad} text='bad' />
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App