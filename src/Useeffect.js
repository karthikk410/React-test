import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState("Default")

  useEffect(() => {
    console.log("updated");
    console.log(msg)
    console.log("count is increased to: ", count);
  },[count, msg]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setMsg('msg updated')}>Update</button>
    </div>
  );
};

export default Counter;
