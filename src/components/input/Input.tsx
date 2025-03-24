import { InputHTMLAttributes, ChangeEvent } from "react";
import styles from "./styles.module.scss";
import { useController, Control, RegisterOptions } from "react-hook-form";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type: string;
  mandatory?: boolean;
  onlyNumbers?: boolean;
  error?: string;
  classname?: string;
  control: Control<any>;
  name: string;
  rules?: RegisterOptions;
}

export const Input = ({
  label,
  mandatory = false,
  onlyNumbers = false,
  error,
  classname,
  control,
  name,
  rules,
  ...props
}: Props) => {
  const { field } = useController({
    name,
    control,
    rules,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;

    if (onlyNumbers) {
      inputValue = inputValue.replace(/[^0-9]/g, "");
    }

    field.onChange(inputValue);
  };

  return (
    <div className={styles.input_container}>
      <label htmlFor={label}>
        {label}
        {mandatory && <span>*</span>}
        {error && <span>{error}</span>}
      </label>
      <input
        id={label}
        {...props}
        {...field}
        className={`${classname && classname} ${error && styles.error}`}
        placeholder={label}
        onChange={handleChange}
      />
    </div>
  );
};
