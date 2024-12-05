import { NavLink } from "react-router-dom";
import { Text } from "../Text/Text";
import styles from "./Link.module.scss";
import classNames from "classnames";

export function Link({ to, text }) {
  return (
    <NavLink
      className={({ isActive }) =>
        classNames(styles.link, isActive && styles.active)
      }
      to={to}
    >
      <Text>{text}</Text>
    </NavLink>
  );
}
