import { useEffect, useState } from "react";
import styles from "./ProgressBar.module.scss";
import { getPercent } from "./helpers/getPercent";

export function ProgressBar() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const html = document.querySelector("html");

    setWidth(getPercent(window.innerHeight, window.document.body.scrollHeight));

    const onScroll = () =>
      setWidth(
        getPercent(
          html.scrollTop + window.innerHeight,
          window.document.body.scrollHeight
        )
      );

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner} style={{ width: `${width}%` }}></div>
    </div>
  );
}
