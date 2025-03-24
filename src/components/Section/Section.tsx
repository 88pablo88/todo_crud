import styles from "./styles.module.scss";

interface Props {
  children: React.ReactElement | React.ReactElement[];
  classname?: string;
}

export const Section = ({ children, classname }: Props) => {
  return (
    <section className={`${styles.section} ${classname && classname}`}>
      {children}
    </section>
  );
};
