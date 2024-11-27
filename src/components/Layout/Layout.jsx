import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import styles from "./Layout.module.scss";
import { ThemeContextProvider } from "../../contexts/theme-context/theme-context";
import { UserContextProvider } from "../../contexts/user-context/user-context";

export function Layout({ children }) {
  return (
    <UserContextProvider>
      <ThemeContextProvider>
        <ProgressBar />
        <Header title={"Рестораны"} />
        <div className={styles.content}>{children}</div>
        <Footer />
      </ThemeContextProvider>
    </UserContextProvider>
  );
}
