import { Counter } from "../Counter/Counter";
import { useForm } from "./hooks/useForm";
import { Button } from "../UI/Button/Button";
import styles from "./ReviewForm.module.scss";

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
      <div className={styles.fields}>
        <label className={styles.label}>
          <span>name:</span>
          <input
            type="text"
            value={name}
            onChange={({ target: { value } }) => {
              console.log(value, "=value");
              setName(value);
            }}
          />
        </label>

        <label className={styles.label}>
          <span>text:</span>
          <input
            type="text"
            value={text}
            onChange={({ target: { value } }) => setText(value)}
          />
        </label>
      </div>

      <div className={styles.rating}>
        <span>rating:</span>
        <Counter
          value={rating}
          onIncrease={() => setRating(rating + 1)}
          onDecrease={() => setRating(rating - 1 < 0 ? 0 : rating - 1)}
        ></Counter>
      </div>

      <Button onClick={clear}>Clear</Button>
    </form>
  );
}
