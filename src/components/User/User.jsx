import { useContext } from "react";
import { UserContext } from "../../contexts/user-context";
import styles from "./User.module.scss";
import { Button } from "../UI/Button/Button";
import { Loader } from "../UI/Loader/Loader";
import { Error } from "../UI/Error/Error";
import { useGetUsersQuery } from "../../redux/services/api";

export function User() {
  const { user, setUser } = useContext(UserContext);
  const { data, isLoading, isError } = useGetUsersQuery();

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <div className={styles.user}>
      {(user && (
        <>
          <div>{user.name}</div>
          <Button onClick={() => setUser(null)}>Выйти</Button>
        </>
      )) || <Button onClick={() => setUser(data[0])}>Войти</Button>}
    </div>
  );
}
