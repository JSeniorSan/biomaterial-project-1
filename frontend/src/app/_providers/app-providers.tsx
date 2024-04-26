import { ThemeProvider } from "@/features/theme/theme-provider";
import ComposeChildren from "@/shared/lib/react";
import React from "react";
import StoreProvider from "./storeProvider";
// import { persistor } from "@/entities/store";
// import { PersistGate } from "redux-persist/integration/react";

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ComposeChildren>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      />
      <StoreProvider>
        {" "}
        {/* <PersistGate loading={null} persistor={persistor}> */}
        {children}
        {/* </PersistGate> */}
      </StoreProvider>
    </ComposeChildren>
  );
};

export default AppProviders;
