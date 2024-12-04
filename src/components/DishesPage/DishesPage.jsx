import { Outlet } from "react-router-dom";
import { selectDishes } from "../../redux/entities/dishes-slice";
import { useSelector } from "react-redux";
import { Link } from "../UI/Link/Link";

export function DishesPage() {
  const list = useSelector(selectDishes);

  return (
    <div>
      {Object.values(list).map(({ id, name }) => (
        <Link to={id} key={id} text={name} />
      ))}

      <Outlet></Outlet>
    </div>
  );
}
