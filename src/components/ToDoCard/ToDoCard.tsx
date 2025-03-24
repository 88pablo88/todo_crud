import borrar from "../../assets/trash.png";
import styles from "./styles.module.scss";

interface Props {
  nombre: string;
  description: string;
  deleteTodo: () => void;
}

export const ToDoCard = ({ nombre, description, deleteTodo }: Props) => {
  return (
    <div className={`${styles.todo}`}>
      <div>
        <h2>{nombre}</h2>
        <p>{description}</p>
      </div>
      <img
        src={borrar}
        alt="borrar tarea"
        width={18}
        height={18}
        onClick={deleteTodo}
      />
    </div>
  );
};
