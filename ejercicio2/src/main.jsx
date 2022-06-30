import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad
 
  return (
    <div>
      <h1>Give feedback</h1>

      <button onClick={ () => setGood(good +1)}>good</button>
      <button onClick={ () => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={ () => setBad(bad + 1)}>bad</button>

      <h1>Statistics</h1>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>All {all}</p>
      <p>Average {(good-bad)/all}</p>
      <p>Positive {(good/all)*100}%</p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
