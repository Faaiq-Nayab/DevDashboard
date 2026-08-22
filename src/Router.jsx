import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Dashboard from "./Dashboard";
import Projects from "./components/Projects";
import Tasks from "./components/Tasks";
import Analytics from "./components/Analytics";
import Calendar from "./components/Calendar";
import Settings from "./components/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "tasks",
        element: <Tasks />,
      },
      {
        path: "analytics",
        element: <Analytics />,
      },
      {
        path: "calendar",
        element: <Calendar />,
      },
      {
        path: "settings",
        element: <Settings />,
      }
    ],
  },
]);