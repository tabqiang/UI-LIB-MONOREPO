import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import json from "@rollup/plugin-json";

const extensions = [".js", ".ts"];

// 基础配置
const baseConfig = {
  input: "src/index.ts",
  plugins: [
    typescript({
      useTsconfigDeclarationDir: true,
    }),
    resolve({ extensions }),
    commonjs(),
    json(),
  ],
};

export default [
  // ESM
  {
    ...baseConfig,
    output: {
      file: "dist/index.js",
      format: "es",
      sourcemap: true,
    },
    external: [], 
  },
  // CommonJS
  {
    ...baseConfig,
    output: {
      file: "dist/index.cjs",
      format: "cjs",
      sourcemap: true, 
    },
    external: [], 
  },
];