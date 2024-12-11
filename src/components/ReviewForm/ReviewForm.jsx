import { Counter } from "../Counter/Counter";
import { useForm } from "./hooks/useForm";
import { Button } from "../UI/Button/Button";
import { Text } from "../UI/Text/Text";
import styles from "./ReviewForm.module.scss";

export function ReviewForm({ onSubmit }) {
  const {
    form: { name, text, rating },
    clear,
    setName,
    setText,
    setRating,
  } = useForm();

  return (
    <form>
      <div className={styles.fields}>
        <label className={styles.label}>
          <Text>name:</Text>
          <input
            type="text"
            value={name}
            onChange={({ target: { value } }) => {
              setName(value);
            }}
          />
        </label>

        <label className={styles.label}>
          <Text>text:</Text>
          <input
            type="text"
            value={text}
            onChange={({ target: { value } }) => setText(value)}
          />
        </label>
      </div>

      <div className={styles.rating}>
        <Text>rating:</Text>
        <Counter
          value={rating}
          onIncrease={() => setRating(rating + 1)}
          onDecrease={() => setRating(rating - 1 < 0 ? 0 : rating - 1)}
        ></Counter>
      </div>

      <Button onClick={clear}>Clear</Button>
      <Button onClick={() => onSubmit({ text, rating })}>Submit</Button>
    </form>
  );
}
