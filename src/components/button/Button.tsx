import { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: "PRIMARY" | "SECONDARY";
}

export const Button = ({
  text,
  className,
  variant = "PRIMARY",
  ...props
}: Props) => {
  return (
    <button
      {...props}
      className={`${styles.buttonClass}  ${
        variant === "SECONDARY" && styles.secondary
      } ${className && className}`}
    >
      {text}
    </button>
  );
};
