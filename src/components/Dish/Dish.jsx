import { useContext } from "react";
import { Counter } from "../Counter/Counter";
import { UserContext } from "../../contexts/user-context";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectAmountById,
} from "../../redux/ui/cart-slice";
import { Link } from "../UI/Link/Link";

export function Dish({ name, id }) {
  const { user } = useContext(UserContext);

  const dispatch = useDispatch();

  const amount = useSelector((state) => selectAmountById(state, id));

  return (
    <div>
      <Link to={`/dish/${id}`} text={name} />

      {user && (
        <Counter
          value={amount}
          onIncrease={() => dispatch(addToCart(id))}
          onDecrease={() => dispatch(removeFromCart(id))}
        ></Counter>
      )}
    </div>
  );
}
