import { useContext } from "react";
import { UserContext } from "../../contexts/user-context";
import styles from "./User.module.scss";
import { Button } from "../UI/Button/Button";
import { normalizedUsers } from "../../data/normalized-mock";

export function User() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className={styles.user}>
      {(user && (
        <>
          <div>{user.name}</div>
          <Button onClick={() => setUser(null)}>Выйти</Button>
        </>
      )) || <Button onClick={() => setUser(normalizedUsers[0])}>Войти</Button>}
    </div>
  );
}
