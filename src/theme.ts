import { createSystem, defaultConfig } from "@chakra-ui/react";

const config = {
  ...defaultConfig,
};

const system = createSystem(config);

if (typeof window !== "undefined") {
  document.documentElement.setAttribute("data-theme", "dark");
}

export default system;
