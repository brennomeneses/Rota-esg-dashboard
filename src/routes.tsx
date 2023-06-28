import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page from "./page"
import DashboardLayout from "./layouts/dashboardLayout";

export default function Routes() {

  const router = createBrowserRouter([
    {
      path: "dashboard",
      element: <DashboardLayout />,
      children: [
        {
          path: "outro",
          element: <Page />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}