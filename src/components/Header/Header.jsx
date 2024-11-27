import styles from "./Header.module.scss";
import { Text } from "../UI/Text/Text";

export function Header({ title }) {
  return (
    <header className={styles.header}>
      <Text type={1}>{title}</Text>
    </header>
  );
}
