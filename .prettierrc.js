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

  // Plugins
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],

  // Import sorting
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "^types$",
    "^@/types/(.*)$",
    "^@/config/(.*)$",
    "^@/lib/(.*)$",
    "^@/hooks/(.*)$",
    "^@/components/ui/(.*)$",
    "^@/components/(.*)$",
    "^@/app/(.*)$",
    "",
    "^[./]",
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],

  // Tailwind CSS plugin
  tailwindConfig: "./tailwind.config.ts",
  tailwindFunctions: ["clsx", "cn", "cva"],

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
