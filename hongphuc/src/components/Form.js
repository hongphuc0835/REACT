import { useState } from 'react';

export default function Form() {
  const [name, setName] = useState('hongphuc');
  const [age, setAge] = useState(18);

  return (
    <>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => setAge(age + 1)}>
        Increment age
      </button>
      <p>Hello, {name}. You are {age}.</p>
    </>
  );
}
