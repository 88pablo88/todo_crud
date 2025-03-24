interface Props {
  nombre: string;
  email: string;
  telefono: string;
}

export const postMisDatos = ({ nombre, email, telefono }: Props) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ nombre, email, telefono });
    }, 2000);
  });
};
