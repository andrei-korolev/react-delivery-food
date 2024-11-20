import { useState } from "react";
import { Counter } from "../Counter/Counter";

export function Dish({ name }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      {name}
      <Counter
        value={count}
        onIncrease={() => setCount((value) => value + 1)}
        onDecrease={() => setCount((value) => (value - 1 < 0 ? 0 : value - 1))}
      ></Counter>
    </div>
  );
}
