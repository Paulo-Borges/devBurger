import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./routes/ErrorPage.tsx";
import Bebidas from "./routes/Bebidas.tsx";
import Contato from "./routes/Contato.tsx";
import Lanches from "./routes/Lanches.tsx";
import Login from "./routes/Login.tsx";
import Sacola from "./routes/Sacola.tsx";
import Signup from "./routes/Signup.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "bebidas",
        element: <Bebidas />,
      },
      {
        path: "contato",
        element: <Contato />,
      },
      {
        path: "lanches",
        element: <Lanches />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sacola",
        element: <Sacola />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
