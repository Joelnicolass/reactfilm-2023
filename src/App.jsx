import React, { useState, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./core/routes/app_router";
import RootProvider from "./core/providers/root_provider";
import axios from "axios";

const App = () => {
  return (
    <>
      <RootProvider>
        <RouterProvider router={appRouter} />
      </RootProvider>
    </>
  );
};

export default App;
