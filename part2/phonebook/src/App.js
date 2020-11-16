import React, { useState } from 'react'
import Filter from './components/Filter';
// import PersonForm from './components/PersonForm';
// import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setNewSearch] = useState('');

  const filterPerson = (e) => {
    setNewSearch(e.target.value)
  }
  const displayPerson = newSearch
  ? persons.filter(person => person.name.toLowerCase().search(newSearch.toLowerCase()) !== -1)
  : persons;

  const formSubmit = (e) => {
    e.preventDefault();
    const nameExist = persons.some((person) => person.name === newName)
    if (nameExist) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat({ name: newName, number: newNumber}));
      setNewName('');
      setNewNumber('');
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newSearch} onChange={filterPerson}/>
      <form onSubmit={formSubmit}>
        <div>
          <h2>Add a new number</h2>  
          name:<input value={newName} onChange={(e) => setNewName(e.target.value)} />
          number: <input value={newNumber} onChange={(e) => setNewNumber(e.target.value)}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {displayPerson.map((person) => (
        <p key={person.name}>{person.name}: {person.number}</p>
      ))}
    </div>
  )
}

export default App