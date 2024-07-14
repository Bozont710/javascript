import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/filter'
import PersonForm from './components/personform'
import Persons from './components/persons'
import Title from './components/title'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  console.log(persons.length)
  

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])


  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    const all_names = persons.map(person => person.name)
    if (all_names.includes(newName)) {
      alert(`${newName} is already in phonebook`)
      return
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }
  
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const personsToShow = filter === ''
    ? persons
    : persons.filter(person =>
        person.name.toLowerCase().includes(filter.toLowerCase()))
  const row_names = () => personsToShow.map(person =>
    <p key={person.id} > {person.name} {person.number} </p>
  )

  console.log(persons)


  return (
    <div>
      <Title name='Phonebook' />
        <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <Title name='Add a new' />
        <PersonForm addPerson={addPerson}
                    newName={newName}
                    handleNameChange={handleNameChange}
                    newNumber={newNumber}
                    handleNumberChange={handleNumberChange}
                    />
      <Title name='Persons' />
        <Persons row_names={row_names()} />
    </div>
  )
}

export default App