import close from "../../assets/close.png";
import styles from "./styles.module.scss";

interface Props {
  children: React.ReactElement[] | React.ReactElement;
  className?: string;
  title?: string;
  onClose: () => void;
}

export const Modal = ({ children, className, title, onClose }: Props) => {
  return (
    <div className={`${styles.modalBackDrop} `}>
      <div className={`${styles.modalContainer} ${className ? className : ""}`}>
        <div className={styles.modalHeader}>
          {title && <h1>{title}</h1>}
          <img
            src={close}
            alt="cerrar modal"
            width={14}
            height={14}
            className={styles.close}
            onClick={onClose}
          />
        </div>
        {children}
      </div>
    </div>
  );
};
