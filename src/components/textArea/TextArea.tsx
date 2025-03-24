import { TextareaHTMLAttributes } from "react";
import { useController, Control, RegisterOptions } from "react-hook-form";
import styles from "./styles.module.scss";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
  control: Control<any>;
  rules?: RegisterOptions;
}

export const TextArea = ({ label, name, control, rules, ...props }: Props) => {
  const { field } = useController({
    name,
    control,
    rules,
  });
  return (
    <div className={styles.container}>
      <label htmlFor={name}>{label}</label>
      <textarea
        {...props}
        {...field}
        id={name}
        className={styles.inputArea}
        placeholder={label}
      />
    </div>
  );
};
