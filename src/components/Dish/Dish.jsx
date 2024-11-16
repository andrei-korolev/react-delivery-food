import { useState } from "react";

export function Dish({ name }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      {name} - {count}
      <button type="buttom" onClick={() => setCount((value) => value + 1)}>
        +
      </button>
      <button
        type="buttom"
        onClick={() => setCount((value) => (value - 1 < 0 ? 0 : value - 1))}
      >
        -
      </button>
    </div>
  );
}
