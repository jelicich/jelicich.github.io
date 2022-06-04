module.exports = {
  root: true,
  extends: [
    "plugin:vue/essential",
    "plugin:prettier/recommended",
    "eslint:recommended",
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "no-debugger": "warn",
    "vue/valid-v-slot": [
      "error",
      {
        // TODO: why does this not work?
        allowModifiers: true,
      },
    ],
  },
  env: {
    node: true,
    commonjs: "true",
  },
};
