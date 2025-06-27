module.exports = {
  // Basic formatting
  semi: true,
  trailingComma: "es5",
  singleQuote: false,
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,

  // JSX specific
  jsxSingleQuote: false,
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: "always",

  // Line endings
  endOfLine: "lf",

  // File specific overrides
  overrides: [
    {
      files: "*.json",
      options: {
        printWidth: 120,
      },
    },
    {
      files: "*.md",
      options: {
        printWidth: 100,
        proseWrap: "always",
      },
    },
    {
      files: "*.css",
      options: {
        printWidth: 120,
      },
    },
  ],
};
