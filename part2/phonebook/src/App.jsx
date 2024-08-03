import { useState, useEffect } from 'react'

import Filter from './components/Filter'
import PersonForm from './components/Personform'
import Content from './components/Content'
import Title from './components/Title'
import personService from './services/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  

  useEffect(() => {
    console.log('effect')
    personService
      .getAll()
      .then(response => {
        setPersons(response)
      })
  }, [])


  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
    }
    const all_names = persons.map(person => person.name)
    if (all_names.includes(newName)) {
      alert(`${newName} is already in phonebook`)
      return
    }
    personService
      .create(personObject)
      .then(response => {
        setPersons(persons.concat(response.data))
        setNewName('')
        setNewNumber('')
      })
  }
  

  const removePerson = person => {
    if (window.confirm(`Delete ${person.name}?`)) {
      personService
        .remove(person.id)
        .then(response => response.data)
    }
  }


  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  const personsToShow = filter === ''
    ? persons
    : persons.filter(person =>
        person.name.toLowerCase().includes(filter.toLowerCase()))
        
  const row_names = () => {
    return personsToShow.map(person =>
    <p key={person.id} > {person.name} {person.number} </p>
  )}

  


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
        <Content persons={persons} removePerson={removePerson} />
    </div>
  )
}

export default App