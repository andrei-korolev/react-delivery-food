import classNames from "classnames";
import styles from "./Text.module.scss";

export function Text({ type, children }) {
  if (type === 1) {
    return <h1 className={classNames("text", styles.h1)}>{children}</h1>;
  }

  if (type === 2) {
    return <h2 className={classNames("text", styles.h2)}>{children}</h2>;
  }

  if (type === 3) {
    return <h3 className={classNames("text", styles.h3)}>{children}</h3>;
  }

  return <span className={styles.text}>{children}</span>;
}
