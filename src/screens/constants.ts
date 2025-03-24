import { TabProps } from "../components";

export const getTabs = (currentPath: string): TabProps[] => [
  {
    text: "Mis Datos",
    selected: currentPath === "/mis_datos",
    path: "/mis_datos",
  },
  {
    text: "Mis tareas",
    selected: currentPath === "/mis_tareas",
    path: "/mis_tareas",
  },
  {
    text: "Mis devoluciones",
    selected: currentPath === "/mis_devoluciones",
    path: "/mis_devoluciones",
  },
  {
    text: "Mis comunicaciones",
    selected: currentPath === "/mis_comunicaciones",
    path: "/mis_comunicaciones",
  },
  {
    text: "Mis mejores amigos",
    selected: currentPath === "/mis_mejoresAmigos",
    path: "/mis_mejoresAmigos",
  },
];
