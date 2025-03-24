import { useForm } from "react-hook-form";
import { Button, Input, Loader } from "../../../../components/index";
import { postMisDatos } from "../../../../services/user_services";
import { useMutation } from "@tanstack/react-query";
import styles from "./styles.module.scss";

interface FormValues {
  nombre: string;
  email: string;
  telefono: string;
}

export const Form = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    setValue,
  } = useForm<FormValues>({
    mode: "onBlur",
  });

  const { mutate, isPending } = useMutation({
    mutationFn: ({ nombre, email, telefono }: FormValues) =>
      postMisDatos({ nombre, email, telefono }),
    onSuccess: () => {
      setValue("email", "");
      setValue("nombre", "");
      setValue("telefono", "");
    },
  });

  return (
    <>
      {isPending && <Loader />}
      <form
        className={styles.formContainer}
        onSubmit={handleSubmit((data) => mutate(data))}
      >
        <Input
          label="Nombre"
          type="text"
          mandatory
          name="nombre"
          control={control}
          rules={{ required: "Este campo es requerido" }}
          error={errors.nombre?.message}
        />
        <Input
          label="Email"
          type="text"
          mandatory
          name="email"
          control={control}
          rules={{
            required: "Este campo es requerido",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Formato de email incorrecto",
            },
          }}
          error={errors.email?.message}
        />
        <Input
          label="Telefono"
          type="text"
          mandatory
          name="telefono"
          control={control}
          rules={{ required: "Este campo es requerido" }}
          error={errors.telefono?.message}
          onlyNumbers
        />
        <Button
          text="Guardar"
          className={styles.button}
          type="submit"
          disabled={!isValid || !isDirty}
        />
      </form>
    </>
  );
};
