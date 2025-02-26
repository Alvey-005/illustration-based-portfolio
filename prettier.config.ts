import { type Config } from "prettier";

const config: Config = {
  trailingComma: "none", // Removes trailing commas
  semi: true, // Enforces semicolons
  singleQuote: true, // Uses single quotes instead of double quotes
  plugins: ["prettier-plugin-tailwindcss"] // Correct key format
};

export default config;
