import { useState } from 'react';
import people from './data';
import Person from './Person';

const App = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = people[index];

  const prevPerson = () => {
    if (id === 1) {
      setIndex(people.length - 1);
      return;
    }
    setIndex(index - 1);
  };

  const nextPerson = () => {
    if (id === people.length) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  };

  const randomPerson = () => {
    const random = Math.floor(Math.random() * people.length);
    setIndex(random);
  };

  return (
    <main>
      <Person
        id={id}
        name={name}
        job={job}
        image={image}
        text={text}
        prevPerson={prevPerson}
        nextPerson={nextPerson}
        randomPerson={randomPerson}
      />
    </main>
  );
};
export default App;
