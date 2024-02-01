import type { Decorator } from "@storybook/react";
import { useEffect } from "react";

export const withThemeProvider: Decorator = (Story, context) => {
  useEffect(() => {
    if (typeof document !== undefined) {
      const theme = context.globals.theme;
      document.body.setAttribute("data-theme", theme);
    }
  }, [context.globals.theme]);

  return Story();
};
