import { useParams } from "react-router-dom";
import { Text } from "../UI/Text/Text";
import { Loader } from "../UI/Loader/Loader";
import { Error } from "../UI/Error/Error";
import { useGetDishesByIdRestaurantQuery } from "../../redux/services/api";
import { Dish } from "../Dish/Dish";

export function MenuPage() {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetDishesByIdRestaurantQuery(id);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <div>
      <Text type={3}>Меню</Text>
      {(data.length && (
        <ul>
          {data.map(({ id, name }) => (
            <li key={id}>
              <Dish name={name} id={id} />;
            </li>
          ))}
        </ul>
      )) || <Text>Информация об актуальном меню сейчас отсутствует</Text>}
    </div>
  );
}
