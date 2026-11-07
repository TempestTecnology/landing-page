import "tempest-react-sdk/styles/core.css";
import "@/styles/brand.css";
import "@/styles/landing.css";
import "@/styles/portfolio.css";
import "@/styles/founder.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { FounderApp } from "@/FounderApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FounderApp />
  </StrictMode>,
);
