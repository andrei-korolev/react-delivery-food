import { useContext, useState } from "react";
import { Counter } from "../Counter/Counter";
import { UserContext } from "../../contexts/user-context";

export function Dish({ name }) {
  const [count, setCount] = useState(0);
  const { user } = useContext(UserContext);

  return (
    <div>
      {name}
      {user && (
        <Counter
          value={count}
          onIncrease={() => setCount((value) => value + 1)}
          onDecrease={() =>
            setCount((value) => (value - 1 < 0 ? 0 : value - 1))
          }
        ></Counter>
      )}
    </div>
  );
}
