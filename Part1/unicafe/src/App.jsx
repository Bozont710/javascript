import { useState } from 'react'


const Statistics = ({ good, neutral, bad }) => {
  if ((good + neutral + bad) === 0) {
    return (
      <p>
        No feedback given
      </p>
    )
  }
  else {
    return (
      <table>
        <tbody>
          <StatisticsLine text='good' value={good} />
          <StatisticsLine text='neutral' value={neutral} />
          <StatisticsLine text='bad' value={bad} />
          <StatisticsLine text='all' value={good+neutral+bad} />
          <StatisticsLine text='average' value={(good-bad)/(good+neutral+bad)} />
          <StatisticsLine text='positive' value={good/((good+neutral+bad)/100)} percentage='%' />
        </tbody>
      </table>
    )
  }
}


const StatisticsLine = ({ text, value, percentage='' }) => {
  return (
    <tr>
      <td> {text} </td>
      <td> {value}{percentage} </td>
    </tr>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <div>
        <h2>give feedback</h2>
        <button onClick={handleGood} >good</button>
        <button onClick={handleNeutral} >neutral</button>
        <button onClick={handleBad} >bad</button>
      </div>
      <h2>Statistics</h2>
      <Statistics 
      good={good} 
      neutral={neutral} 
      bad={bad} 
      />
    </div>
  )
}

export default App