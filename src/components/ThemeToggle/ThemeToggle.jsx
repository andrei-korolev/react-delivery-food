import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";
import { Button } from "../UI/Button/Button";

export function ThemeToggle() {
  const { toggle } = useContext(ThemeContext);

  return <Button onClick={toggle}>Toggle theme</Button>;
}
