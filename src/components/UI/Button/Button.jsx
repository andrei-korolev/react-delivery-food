import classNames from "classnames";
import styles from "./Button.module.scss";

export function Button({
  children,
  mode = "primary",
  size = "small",
  onClick,
}) {
  return (
    <button
      type="button"
      className={classNames(styles.button, {
        [styles._primary]: mode === "primary",
        [styles._secondary]: mode === "secondary",
        [styles._small]: size === "small",
        [styles._large]: size === "large",
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
