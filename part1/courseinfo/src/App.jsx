const Header = (props) => {
  return (
    <h1> {props.course.name} </h1>
  )
}


const Content = (props) => {
  return (
    <div>
      <Part part={props.course.parts[0].name} exercise={props.course.parts[0].exercises} />
      <Part part={props.course.parts[1].name} exercise={props.course.parts[1].exercises} />
      <Part part={props.course.parts[2].name} exercise={props.course.parts[2].exercises} />
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


const Total = (props) => {
  const sum = props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises
  return (
    <div>
      <p>
        Number of exersises {sum}
      </p>
    </div>
  )
}


const App = () => {
  const course = { 
      name: 'Half Stack application development',
      parts: [
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
  }
  console.log(course)
  

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App