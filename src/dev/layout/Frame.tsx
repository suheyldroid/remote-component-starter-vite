import Test from "../../widgets/Test";
import styles from "./Frame.module.css";

function Frame() {
  return (
    <div className={styles.root}>
      <h1>Remote Component Starter</h1>
      <div className={styles.content}>
        <Test />
      </div>
    </div>
  );
}

export default Frame;
