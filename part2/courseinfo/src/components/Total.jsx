const Total = (props) => {
    console.log(props.parts)
    const initialValue = 0
    const total = props.parts.reduce((s, p) => s + p.exercises, initialValue)
    console.log(total)

    return (
      <div>
        <p>
          Number of exersises { total }
        </p>
      </div>
    )
}

export default Total