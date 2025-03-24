import { useForm } from "react-hook-form";
import { Modal, Input, TextArea, Button, Loader } from "../../../../components";
import { useMutation } from "@tanstack/react-query";
import { addToDo } from "../../../../services/to_do_services";
import styles from "./styles.module.scss";

interface FormValues {
  nombre: string;
  descripcion: string;
}

interface Props {
  onClose: () => void;
  addTodo: (data: unknown) => void;
}

export const AddTodoModal = ({ onClose, addTodo }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<FormValues>({
    mode: "onBlur",
  });

  const { mutate, isPending, isError } = useMutation({
    mutationFn: ({ nombre, descripcion }: FormValues) =>
      addToDo({ nombre, descripcion }),
    onSuccess: (data) => {
      addTodo(data);
      onClose();
    },
  });

  return (
    <Modal title="Añadir tarea" onClose={onClose}>
      <>
        {isPending && <Loader />}

        <form
          className={styles.formContainer}
          onSubmit={handleSubmit((data) => mutate(data))}
        >
          <Input
            label="Nombre"
            type="text"
            name="nombre"
            control={control}
            rules={{ required: true }}
            error={errors.nombre?.message}
          />
          <TextArea
            label="Descripción"
            name="descripcion"
            control={control}
            rules={{ required: true }}
          />
          {isError && (
            <p className={styles.error}>No se pudo crear la tarea.</p>
          )}
          <div className={styles.buttons}>
            <Button variant={"SECONDARY"} text="Cancelar" onClick={onClose} />
            <Button
              text="Guardar"
              disabled={!isValid || !isDirty}
              type="submit"
            />
          </div>
        </form>
      </>
    </Modal>
  );
};
