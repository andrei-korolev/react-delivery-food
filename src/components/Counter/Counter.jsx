import { Button } from "../UI/Button/Button";
import styles from "./Counter.module.scss";

export function Counter({ value, onIncrease, onDecrease }) {
  return (
    <div className={styles.counter}>
      <Button size="small" mode="secondary" onClick={onIncrease}>
        +
      </Button>
      {value}
      <Button size="small" mode="secondary" onClick={onDecrease}>
        -
      </Button>
    </div>
  );
}
