import { Tab, TabProps } from "../index";
import styles from "./styles.module.scss";

interface Props {
  tabs: TabProps[];
}

export const NavBar = ({ tabs }: Props) => {
  return (
    <ul className={`${styles.navbar}`}>
      {tabs.map((t) => (
        <Tab text={t.text} selected={t.selected} path={t.path} key={t.path} />
      ))}
    </ul>
  );
};
