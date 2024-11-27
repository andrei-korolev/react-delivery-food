import styles from "./Header.module.scss";
import { Text } from "../UI/Text/Text";
import { Button } from "../UI/Button/Button";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";
import { UserContext } from "../../contexts/user-context";
import { USER } from "../../data/user";

export function Header({ title }) {
  const { toggle } = useContext(ThemeContext);
  const { user, setUser } = useContext(UserContext);

  return (
    <header className={styles.header}>
      <Text type={1}>{title}</Text>
      <Button onClick={toggle}>Toggle theme</Button>
      <div className={styles.user}>
        {(user && (
          <>
            <div>{user.name}</div>
            <Button onClick={() => setUser(null)}>Выйти</Button>
          </>
        )) || <Button onClick={() => setUser(USER)}>Войти</Button>}
      </div>
    </header>
  );
}
