import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import styles from "./Layout.module.scss";

export function Layout({ children }) {
  return (
    <>
      <ProgressBar />
      <Header title={"Рестораны"} />
      <div className={styles.content}>{children}</div>
      <Footer />
    </>
  );
}
