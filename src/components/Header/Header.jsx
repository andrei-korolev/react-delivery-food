import styles from "./Header.module.scss";
import { Text } from "../UI/Text/Text";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { User } from "../User/User";

export function Header({ title }) {
  return (
    <header className={styles.header}>
      <Text type={1}>{title}</Text>
      <ThemeToggle />
      <User />
    </header>
  );
}
