const Header = (props) => {
  return (
    <h1> {props.course[0]} </h1>
  )
}


const Content = ({parts}) => {
  return (
    <div>
      <Part part={parts[1].name} exercise={parts[1].exercises} />
    </div>
  )
}


const Part = ({part, exercise}) => {
  return (
    <p>
      {part} {exercise}
    </p>
  )
}


const Total = ({sum}) => {
  return (
    <div>
      <p>
        Number of exersises {sum}
      </p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    { 
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  const sum = parts[1].exercises + parts[2].exercises + parts[3].exercises

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total sum={sum} />
    </div>
  )
}

export default App