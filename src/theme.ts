import { createSystem, defaultConfig } from "@chakra-ui/react";

// In Chakra UI v3, color mode is configured differently
// The system includes built-in dark/light mode support
const config = {
  ...defaultConfig,
  // v3 handles color modes through CSS custom properties and data attributes
  // rather than the old initialColorMode approach
};

const system = createSystem(config);

// Set initial color mode on system creation
if (typeof window !== 'undefined') {
  document.documentElement.setAttribute('data-theme', 'dark');
}

export default system;