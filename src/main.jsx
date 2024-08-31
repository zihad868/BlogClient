import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProfileProvider from "./Provider/profileProvider.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ProfileProvider>
          <RouterProvider router={router} />
        </ProfileProvider>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
