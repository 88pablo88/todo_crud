import {
  MisComunicaciones,
  MisDatos,
  MisDevoluciones,
  MisMejoresAmigos,
  MisTareas,
  Layout,
} from "./routes";
import { Routes, Route, Navigate } from "react-router";

const Navigation = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/mis_datos" element={<MisDatos />} />
        <Route path="/mis_comunicaciones" element={<MisComunicaciones />} />
        <Route path="/mis_devoluciones" element={<MisDevoluciones />} />
        <Route path="/mis_mejoresAmigos" element={<MisMejoresAmigos />} />
        <Route path="/mis_tareas" element={<MisTareas />} />
        <Route path="*" element={<Navigate to="/mis_tareas" />} />
      </Route>
    </Routes>
  );
};

export default Navigation;
