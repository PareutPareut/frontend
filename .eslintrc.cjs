module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
  },
}

// module.exports = {
//   root: true,
//   env: {
//     browser: true,
//     es2021: true,
//     node: true,
//   },
//   extends: [
//     "eslint:recommended",
//     "plugin:react/recommended",
//     // "plugin:react/jsx-runtime",
//     "plugin:react-hooks/recommended",
//     "plugin:import/recommended",
//     "eslint-config-prettier",
//     "plugin:prettier/recommended",
//   ],
//   ignorePatterns: ["dist", ".eslintrc.cjs"],
//   // parserOptions: { ecmaVersion: "latest", sourceType: "module" },
//   // compilerOptions: {
//   //   jsx: "react",
//   //   baseUrl: "./src",
//   //   // "paths": {
//   //   //   "#/*": ["./*"]
//   //   // }
//   // },
//   plugins: ["react"],

//   settings: {
//     react: {
//       version: "detect",
//     },
//     "import/resolver": {
//       node: {
//         extensions: [".js", ".jsx", ".ts", ".tsx"],
//         // moduleDirectory: ["node_modules", "@types"],
//       },
//       typescript: {},
//     },
//   },
//   // plugins: ["react-refresh"],
//   rules: {
//     // "react/jsx-no-target-blank": "off",
//     "react/prop-types": "off",
//     "import/newline-after-import": ["error"],
//   },
// }
