import styles from "./Restaurants.module.scss";
import { Outlet } from "react-router-dom";
import { Loader } from "../UI/Loader/Loader";
import { Error } from "../UI/Error/Error";
import { useGetRestaurantsQuery } from "../../redux/services/api";
import { Link } from "../UI/Link/Link";

export function RestaurantsPage() {
  const { data, isError, isLoading } = useGetRestaurantsQuery();

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <div>
      <div className={styles.wrapper}>
        {data.map(({ id, name }) => (
          <Link key={id} to={`./${id}/menu`} text={name} />
        ))}
      </div>
      <Outlet />
    </div>
  );
}
