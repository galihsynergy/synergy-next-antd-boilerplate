import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-explicit-any": 0,
      "react/react-in-jsx-scope": 0,
      "react/no-unescaped-entities": 0,
      "no-console": ["error", { allow: ["warn", "error"] }],
      "react/display-name": [0, { ignoreTranspilerName: true }],
    },
  },
];

export default eslintConfig;
