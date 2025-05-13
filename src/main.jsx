import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "@fontsource/roboto/400.css"; // Regular
import "@fontsource/roboto/500.css"; // Medium (optional)
import "@fontsource/roboto/700.css"; // Bold
import "@fontsource/roboto/900.css"; // Black (optional)
//import axios from "axios";

import store from "./store.js";
import { Provider } from "react-redux";

//axios.defaults.baseURL = import.meta.env.VITE_API_URL;
//axios.defaults.headers.common["Authorization"] = `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
