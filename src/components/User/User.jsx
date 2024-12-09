import { useContext } from "react";
import { UserContext } from "../../contexts/user-context";
import styles from "./User.module.scss";
import { Button } from "../UI/Button/Button";
import { useRequest } from "../../redux/hooks/use-request";
import { getUsers } from "../../redux/entities/users/get-users";
import { PENDING, REJECTED } from "../../shared/configs/request-status";
import { Loader } from "../UI/Loader/Loader";
import { Error } from "../UI/Error/Error";
import { useSelector } from "react-redux";
import { selectUsers } from "../../redux/entities/users/users-slice";

export function User() {
  const { user, setUser } = useContext(UserContext);
  const newUser = Object.values(useSelector(selectUsers))[0];
  const requestStatus = useRequest(getUsers);

  if (requestStatus === PENDING) {
    return <Loader />;
  }

  if (requestStatus === REJECTED) {
    return <Error />;
  }

  return (
    <div className={styles.user}>
      {(user && (
        <>
          <div>{user.name}</div>
          <Button onClick={() => setUser(null)}>Выйти</Button>
        </>
      )) || <Button onClick={() => setUser(newUser)}>Войти</Button>}
    </div>
  );
}
