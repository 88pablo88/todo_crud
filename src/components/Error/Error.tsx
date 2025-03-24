import { TbFaceIdError } from "react-icons/tb";
import styles from "./styles.module.scss";

interface Props {
  message: string;
}

export const Error = ({ message }: Props) => {
  return (
    <div className={styles.error}>
      <p>{message}</p>
      <TbFaceIdError size={50} color="#639605" />
    </div>
  );
};
