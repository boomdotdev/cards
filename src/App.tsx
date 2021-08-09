import styles from "./App.module.scss";
import Card from "./components/Card";
import eggplant from "./eggplant.svg";

function App() {
  return (
    <div className={styles.app}>
      <Card
        title="Okrr"
        description="Only when a person knows what is wrong with him, only I know what is wrong with me"
        icon={<img src={eggplant} alt="okrr" />}
      />
    </div>
  );
}

export default App;
