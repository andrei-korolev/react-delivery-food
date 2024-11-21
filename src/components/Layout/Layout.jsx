import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { ProgressBar } from "../ProgressBar/ProgressBar";

export function Layout({ children }) {
  return (
    <>
      <ProgressBar />
      <Header title={"Рестораны"} />
      {children}
      <Footer />
    </>
  );
}
