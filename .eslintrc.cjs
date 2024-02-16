module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  // settings: { react: { version: "18.2" } },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        moduleDirectory: ["node_modules", "@types"],
      },
      typescript: {},
    },
  },
  plugins: ["react-refresh"],
  rules: {
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
  },
}

// module.exports = {
//   root: true,
//   env: {
//     browser: true,
//     es2020: true,
//     node: true,
//   },
//   extends: [
//     "eslint:recommended",
//     "plugin:react/recommended",
//     "plugin:import/recommended",
//     // "plugin:jsx-a11y/recommended",
//     "plugin:react-hooks/recommended",
//     "plugin:prettier/recommended",
//     "eslint-config-prettier",
//   ],
//   ignorePatterns: ["dist", ".eslintrc.cjs"],

//   settings: {
//     react: {
//       version: "detect",
//     },
//     "import/resolver": {
//       node: {
//         extensions: [".js", ".jsx", ".ts", ".tsx"],
//       },
//     },
//   },
//   rules: {
//     "react/react-in-jsx-scope": "off",
//     "import/newline-after-import": ["error"],
//     "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
//   },
// }
