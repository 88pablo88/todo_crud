import { useEffect, useState } from "react";

import {
  Section,
  PageTitle,
  ToDoCard,
  Button,
  Pager,
  Loader,
  Error,
} from "../../components";
import { AddTodoModal } from "./components/addTodoModal/AddTodoModal";
import { getToDo, ToDoProps } from "../../services/to_do_services";
import { useQuery } from "@tanstack/react-query";
import { localPager } from "../../Utils/localPager";
import styles from "./styles.module.scss";

export interface Todo {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}

const MisTareas = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [todos, setTodos] = useState<
    {
      title: string;
      descripcion: string;
      id: number;
      completed: boolean;
      userId: number;
    }[]
  >([]);

  const {
    data = [],
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["todos"],
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    queryFn: () => getToDo,
    select: ({ data }) => data,
  });

  useEffect(() => {
    if (data) {
      setTodos(data);
    }
  }, [data]);

  const addToDo = (newTodo: unknown) => {
    if (
      typeof newTodo === "object" &&
      newTodo !== null &&
      "nombre" in newTodo &&
      "descripcion" in newTodo
    ) {
      const todo = {
        title: (newTodo as ToDoProps).nombre,
        descripcion: (newTodo as ToDoProps).descripcion,
        id: Date.now(),
        completed: false,
        userId: 1,
      };

      const updatedTodos = [todo, ...todos];

      setTodos(updatedTodos);
    }
  };

  const totalPages = Math.ceil(todos.length / 3) | 0;

  return (
    <Section>
      <>
        {isLoading && <Loader />}
        {showModal && (
          <AddTodoModal
            onClose={() => setShowModal(false)}
            addTodo={(data: unknown) => addToDo(data)}
          />
        )}
        <PageTitle title="Mis Tareas" />
        {!isLoading && !isError && todos.length && (
          <>
            {localPager(todos, currentPage).map((todo: Todo) => (
              <ToDoCard
                description={todo.title}
                key={todo.id}
                nombre={todo.title.split(" ")[0]}
                deleteTodo={() => {
                  const updatedTodos = todos.filter((t) => t.id !== todo.id);
                  setTodos(updatedTodos);
                }}
              />
            ))}
            <Pager
              currentPage={currentPage}
              isThereNext={currentPage < totalPages}
              isTherePrev={currentPage !== 1}
              totalPage={totalPages}
              onClickNext={() => setCurrentPage((val) => val + 1)}
              onClickPrev={() => setCurrentPage((val) => val - 1)}
            />
          </>
        )}
        {isError && <Error message="No pudimos cargar tus tareas." />}

        <Button
          text="Añadir tarea"
          className={styles.button}
          onClick={() => {
            setShowModal(true);
          }}
        />
      </>
    </Section>
  );
};
export default MisTareas;
