import React from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import UserComponent from "./User";
import CreateUser from "./CreateUser";
import UpdateUser from "./UpdateUser";

const App = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <UserComponent />,
    },
    {
      path: "/createuser",
      element: <CreateUser />,
    },
    {
      path: "/updateuser",
      element: <UpdateUser />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
