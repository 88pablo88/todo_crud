import { api } from "../config/api";

export const getToDo = api.get("/todos");

export interface ToDoProps {
  nombre: string;
  descripcion: string;
}

export const addToDo = ({ nombre, descripcion }: ToDoProps) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({ nombre, descripcion });
    }, 2000);
  });
