import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ContentCalendar from "./april-content-calendar.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContentCalendar />
  </StrictMode>
);
