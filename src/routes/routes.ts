import { lazy } from "react";

export const Layout = lazy(() => import("../screens/Layout"));

export const MisComunicaciones = lazy(
  () => import("../screens/MisComunicaciones/MisComunicaciones")
);

export const MisDatos = lazy(() => import("../screens/MisDatos/MisDatos"));

export const MisDevoluciones = lazy(
  () => import("../screens/MisDevoluciones/MisDevoluciones")
);

export const MisMejoresAmigos = lazy(
  () => import("../screens/MisMejoresAmigos/MisMejoresAmigos")
);

export const MisTareas = lazy(() => import("../screens/MisTareas/MisTareas"));
