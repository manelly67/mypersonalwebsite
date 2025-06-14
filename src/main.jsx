import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { googleFonts } from "./styles/google-fonts.js";
import App from "./App.jsx";

// set meta description
const meta = document.createElement("meta");
meta.setAttribute("name", "description");
meta.setAttribute(
  "content",
  "Full Stack JavaScript React NodeJS - Maria Nelly Lopez Portfolio"
);
document.head.appendChild(meta);

// set link for google fonts
googleFonts();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
