import { Counter } from "../Counter/Counter";
import { useForm } from "./hooks/useForm";

export function ReviewForm() {
  const {
    form: { name, text, rating },
    clear,
    setName,
    setText,
    setRating,
  } = useForm();

  return (
    <form>
      <label>
        name:
        <input
          type="text"
          value={name}
          onChange={({ target: { value } }) => {
            console.log(value, "=value");
            setName(value);
          }}
        />
      </label>

      <label>
        text:
        <input
          type="text"
          value={text}
          onChange={({ target: { value } }) => setText(value)}
        />
      </label>

      <div>
        rating:
        <Counter
          value={rating}
          onIncrease={() => setRating(rating + 1)}
          onDecrease={() => setRating(rating - 1 < 0 ? 0 : rating - 1)}
        ></Counter>
      </div>

      <button type="button" onClick={clear}>
        Clear
      </button>
    </form>
  );
}
