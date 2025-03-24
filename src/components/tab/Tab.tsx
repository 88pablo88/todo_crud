import styles from "./styles.module.scss";
import { useNavigate } from "react-router";

export interface TabProps {
  text: string;
  selected: boolean;
  path: string;
}

export const Tab = ({ text, selected, path }: TabProps) => {
  const navigate = useNavigate();

  return (
    <li className={styles.container} onClick={() => navigate(path)}>
      <p className={`${styles.text} ${selected && styles.selected}`}>{text}</p>
      {selected && <div className={styles.selected_bottom} />}
    </li>
  );
};
