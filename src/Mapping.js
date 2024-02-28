import React from 'react';
const Mapping = () => {
  const names = ['apple', 'banana', 'orange', 'grapes'];
  return (
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
};
export default Mapping;