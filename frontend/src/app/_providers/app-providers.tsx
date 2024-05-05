import { ThemeProvider } from "@/features/theme/theme-provider";
import ComposeChildren from "@/shared/lib/react";
import React from "react";
import StoreProvider from "./storeProvider";

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ComposeChildren>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      />
      <StoreProvider>{children}</StoreProvider>
    </ComposeChildren>
  );
};

export default AppProviders;
