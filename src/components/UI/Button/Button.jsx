import classNames from "classnames";
import styles from "./Button.module.scss";
import { useContext } from "react";
import { ThemeContext } from "../../../contexts/theme-context";

export function Button({
  children,
  mode = "primary",
  size = "small",
  onClick,
}) {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      type="button"
      className={classNames(styles.button, {
        [styles._primary]: mode === "primary",
        [styles._secondary]: mode === "secondary",
        [styles._small]: size === "small",
        [styles._large]: size === "large",
        [styles._dark]: theme === "dark",
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
