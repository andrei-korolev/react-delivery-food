import { Restaurant } from "./Restaurant";
import { Error } from "../UI/Error/Error";
import { Loader } from "../UI/Loader/Loader";
import { useGetRestaurantsQuery } from "../../redux/services/api";

export function RestaurantContainer({ id }) {
  const { data, isLoading, isError } = useGetRestaurantsQuery(undefined, {
    selectFromResult: (state) => ({
      ...state,
      data: state.data.find((item) => item.id === id),
    }),
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }

  if (!data) {
    return null;
  }

  return <Restaurant restaurant={data} />;
}
