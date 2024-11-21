import React from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import UserComponent from "./User";
import CreateUser from "./CreateUser";

const App = () => {
  let router = createBrowserRouter(
    createRoutesFromElements([
      <>
        <Route path="/" element={<UserComponent />}>
          <Route path="/UserCreate" element={<CreateUser />}></Route>
        </Route>
      </>,
    ])
  );

  return <RouterProvider router={router} />;
};

export default App;
