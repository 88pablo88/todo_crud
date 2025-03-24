import styles from "./styles.module.scss";

interface Props {
  title: string;
  classname?: string;
}

export const PageTitle = ({ title, classname }: Props) => {
  return (
    <h1 className={`${styles.title} ${classname && classname}`}>{title}</h1>
  );
};
