import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "../UI/Link/Link";
import { selectDishes } from "../../redux/entities/dishes/dishes-slice";

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
