import { useState } from "react";
import { ThemeContext } from "./index";

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggle: () =>
          setTheme((theme) => (theme === "light" ? "dark" : "light")),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
