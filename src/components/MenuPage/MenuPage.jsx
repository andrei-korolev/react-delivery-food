import { useParams } from "react-router-dom";
import { Text } from "../UI/Text/Text";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice";
import { useSelector } from "react-redux";
import { DishContainer } from "../Dish/Dish-container";
import { useRequest } from "../../redux/hooks/use-request";
import { PENDING, REJECTED } from "../../shared/configs/request-status";
import { Loader } from "../UI/Loader/Loader";
import { Error } from "../UI/Error/Error";
import { getDishesByIdRestaurant } from "../../redux/entities/dishes/get-dishes-by-id-restaurant";

export function MenuPage() {
  const { id } = useParams();
  const { menu } = useSelector((state) => selectRestaurantById(state, id));

  const requestStatus = useRequest(getDishesByIdRestaurant, id);

  if (requestStatus === PENDING) {
    return <Loader />;
  }

  if (requestStatus === REJECTED) {
    return <Error />;
  }

  return (
    <div>
      <Text type={3}>Меню</Text>
      {(menu.length && (
        <ul>
          {menu.map((id) => (
            <li key={id}>
              <DishContainer id={id} />
            </li>
          ))}
        </ul>
      )) || <Text>Информация об актуальном меню сейчас отсутствует</Text>}
    </div>
  );
}
