import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
function mycode() {
  const name = "sawan";
  return (
    <div>
      <h1>this is my code</h1>
      <h2>{name}</h2>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<>{mycode()} <App /></>);
