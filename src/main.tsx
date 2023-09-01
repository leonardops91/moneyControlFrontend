import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { theme } from "./styles/theme.ts";
import { ChakraProvider } from "@chakra-ui/react";
import { TransactionProvider } from "./contexts/transactionContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <TransactionProvider>
        <App />
      </TransactionProvider>
    </ChakraProvider>
  </React.StrictMode>
);
