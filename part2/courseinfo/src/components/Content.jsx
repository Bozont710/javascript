import Part from '../components/Part'

const Content = ({ parts }) => {
    const differentParts = parts.map(element => {
        console.log(element.id)
        console.log(element)
      return <Part key={element.id} name={element.name} exercise={element.exercises} />
    })
  
    console.log(differentParts)
  
    return (
      <div>
        { differentParts }
      </div>
    )
}

export default Content