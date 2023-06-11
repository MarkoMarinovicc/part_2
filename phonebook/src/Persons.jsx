import React from 'react';

const Persons = ({ persons, searchItem }) => {
  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <div>
      {filteredPersons.map((person) => (
        <div key={person.id}>
          {person.name} {person.number}
        </div>
      ))}
    </div>
  );
};

export default Persons;
