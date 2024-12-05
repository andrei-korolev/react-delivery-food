import { NavLink } from "react-router-dom";

export function HomePage() {
  return (
    <div>
      <div>HomePage</div>
      <NavLink to="/restaurants">go to restaurants</NavLink>
    </div>
  );
}
