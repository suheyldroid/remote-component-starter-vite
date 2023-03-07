import styles from "./Frame.module.css";
import { Demo } from "../../widgets";

function Frame() {
  return (
    <div className={styles.root}>
      <h1>Remote Component Starter</h1>
      <div className={styles.content}>
        <Demo />
      </div>
    </div>
  );
}

export default Frame;
