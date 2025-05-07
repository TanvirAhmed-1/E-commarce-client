import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import Router from "./Router/Router.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Authorization from "./Components/Authontation/Authorization.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Authorization>
      <QueryClientProvider client={queryClient}>
        <div className="max-w-[1400px] mx-auto bg-white px-2">
          <RouterProvider router={Router}></RouterProvider>
        </div>
      </QueryClientProvider>
    </Authorization>
  </StrictMode>
);
