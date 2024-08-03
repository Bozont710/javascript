import Person from './Persons'

const Content = ({ persons, removePerson }) => {
    return (
        <ul>
            {persons.map((person, i) => 
                <Person key={i} person={person} removePerson={removePerson} /> 
            )}
        </ul>
    )
}

export default Content