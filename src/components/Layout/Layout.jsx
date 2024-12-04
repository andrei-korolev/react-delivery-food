import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import styles from "./Layout.module.scss";
import { ThemeContextProvider } from "../../contexts/theme-context/theme-context";
import { Cart } from "../Cart/Cart";
import { useContext } from "react";
import { UserContext } from "../../contexts/user-context";

export function Layout({ children }) {
  const { user } = useContext(UserContext);

  return (
    <ThemeContextProvider>
      <ProgressBar />
      <Header title={"Рестораны"} />
      <div className={styles.content}>{children}</div>
      {user && <Cart />}
      <Footer />
    </ThemeContextProvider>
  );
}
