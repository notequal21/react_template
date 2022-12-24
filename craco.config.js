const path = require("path");
const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig.path.json");

module.exports = {
  webpack: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@store": path.resolve(__dirname, "src/store"),
      "@style": path.resolve(__dirname, "src/style"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@helpers": path.resolve(__dirname, "src/helpers"),
      "@pages": path.resolve(__dirname, "src/pages"),
    },
  },
  jest: {
    configure: {
      preset: "ts-jest",
      moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: "<rootDir>/src/",
      }),
    },
  },
};
