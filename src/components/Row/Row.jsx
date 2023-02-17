import styles from "./Row.module.css";

export const Row = ({ children, space }) => {
  const spaceStyle = space ? styles[space] : "";
  return <div className={`${styles.row} ${spaceStyle}`}>{children}</div>;
};
