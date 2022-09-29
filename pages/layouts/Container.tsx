import styles from "./styles/container.module.css";

interface Children {
  children?: any;
}

function Container(props: Children) {
  return <div className={styles.container}>{props.children}</div>;
}

export default Container;
