import styles from "./Footer.module.scss";
import { Text } from "../UI/Text/Text";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Text>Контактная информация</Text>
    </footer>
  );
}
