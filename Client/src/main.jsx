import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./Context/AuthContext.jsx";
import LoaderProvider from "./Context/LoaderContext.jsx";
import NotificationProvider from "./Context/NotificationContext.jsx";
import FilteredDataProvider from "./Context/FilteredDataContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <LoaderProvider>
        <NotificationProvider>
          <FilteredDataProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </FilteredDataProvider>
        </NotificationProvider>
      </LoaderProvider>
    </AuthProvider>
  </StrictMode>
);
