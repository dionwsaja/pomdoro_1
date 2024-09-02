import App from "./App.jsx";
import "./index.css";
import TwenyFiveMinutes from "./Pages/TwenyFiveMinutes.jsx";
import FiftyMinutes from "./Pages/FiftyMinutes.jsx";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
  },
  {
    element: <TwenyFiveMinutes />,
    path: "/pomodoro1",
  },
  {
    element: <FiftyMinutes />,
    path: "/pomodoro2",
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
