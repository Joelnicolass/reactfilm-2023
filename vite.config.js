import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  let environmentFile;

  switch (mode) {
    case "qa":
      environmentFile = path.join("environments", "environment.qa.js");
      break;

    case "uat":
      environmentFile = path.join("environments", "environment.uat.js");
      break;

    case "prod":
      environmentFile = path.join("environments", "environment.prod.js");
      break;

    default:
      environmentFile = path.join("environments", "environment.js");
      break;
  }

  console.log("--------------------------------------------");
  console.log("VITE CONFIGURATION");
  console.log("COMMAND: ", command);
  console.log("MODE: ", mode);
  console.log("ENVIRONMENT FILE: ", environmentFile);
  console.log("--------------------------------------------");

  return {
    plugins: [react()],
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./tests/setup.js",
    },
    resolve: {
      alias: {
        // eslint-disable-next-line no-undef
        "@environments": path.resolve(__dirname, environmentFile),
      },
    },
  };
});
