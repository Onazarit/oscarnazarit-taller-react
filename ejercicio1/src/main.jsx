import React from 'react'
import ReactDOM from 'react-dom/client'

const Header = ({ course }) => (
  <h1>{course}</h1>
)

const Content = ({ content }) =>(
  <div>
    <p>{content[0]} {content[1]}</p>
    <p>{content[2]} {content[3]}</p>
    <p>{content[4]} {content[5]}</p>
  </div>
)

const Total = ({ exercises }) =>{
  let total = 0;
  exercises.map(item => (
    total+=item
  ))
  return(
    <p>
    Number of exercises {total}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of Reacts'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of component'
  const exercises3 = 14
  const content = [
    part1, 
    exercises1, 
    part2, 
    exercises2, 
    part3, 
    exercises3]
  const exercises = [
    exercises1,
    exercises2,
    exercises3
  ]
  return(
    <div>
      <Header course={course} />
      <Content content = {content} />
      <Total exercises={exercises} /> 
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
