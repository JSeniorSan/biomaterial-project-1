import { ThemeProvider } from "@/features/theme/theme-provider";
import ComposeChildren from "@/shared/lib/react";

import React from "react";

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ComposeChildren>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      />
      {children}
    </ComposeChildren>
  );
};

export default AppProviders;
