import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "./Pages/Home/Home";
import Cadastro from "./Pages/Cadastro/Cadastro";
import Home_logada from "./Pages/Home_logada/Home_logada";
import Login from "./Pages/Login/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="cadastro" element={<Cadastro />} />
      <Route path="logada" element={<Home_logada />} />
      <Route path="login" element={<Login />} />
    </Route>
  )
);

export default function Routes() {
  return <RouterProvider router={router} />;
}
